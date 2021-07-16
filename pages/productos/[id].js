import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import Image from 'next/image';

import Error404 from '../../components/layout/Error404';
import Layout from '../../components/layout/Layout';
import { Campo, InputSubmit } from '../../components/ui/Formulario';
import Boton from '../../components/ui/Boton';

const ContenedorProducto = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const P = styled.p`
  padding: .5rem 2rem;
  background-color: #DA552F;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display:inline-block;
  text-align:center;
`;


const Producto = () => {
    // State del componente
    const [producto, setProducto] = useState('');
    const [error, setError] = useState(false);
    const [comentario, setComentario] = useState({});

    // Routing para obtener el id actual
    const router = useRouter();
    const { id } = router.query;

    const { firebase, usuario } = useContext(FirebaseContext);

    useEffect(() => {
        if (id) {
            const obtenerProducto = async () => {
                const productoQuery = await firebase.db.collection('productos').doc(id);
                const producto = await productoQuery.get();
                if (producto.exists) {
                    setProducto(producto.data());
                } else {
                    setError(true); s
                }
            }
            obtenerProducto();
        }
    }, [id, producto]);

    if (Object.keys(producto).length === 0) return 'Cargando...';

    const { comentarios, creado, descripcion, empresa, nombre, url, urlImagen, votos, creador, haVotado } = producto;

    // Administrar y validar los votos
    const votarProducto = () => {
        if (!usuario) {
            return router.push('/login');
        }

        // Obtener y sumar un nuevo voto
        const nuevoTotal = votos + 1;

        // Verificar si el usuario actual ha votado
        if (haVotado.includes(usuario.uid)) return;

        // Guardar el ID del usuario que ha votado
        const nuevoHaVotado = [...haVotado, usuario.uid];

        // Actualizar en la BD
        firebase.db.collection('productos').doc(id).update({
            votos: nuevoTotal,
            haVotado: nuevoHaVotado
        });

        // Actualizar el state
        setProducto({
            ...producto,
            votos: nuevoTotal
        })
    }

    // Funciones para crear comentarios
    const comentarioChange = (e) => {
        setComentario({
            ...comentario,
            [e.target.name]: e.target.value
        })
    }

    // Identifica si el comentario es el creador del producto
    const esCreador = (id) => {
        if (creador.id === id) {
            return true;
        }
    }

    const agregarComentario = (e) => {
        e.preventDefault();

        if (!usuario) {
            return router.push('/login');
        }

        // Informacion extra al comentario
        comentario.usuarioId = usuario.uid;
        comentario.usuarioNombre = usuario.displayName;

        // Tomar copia de comentario y agregarlos al arreglo
        const nuevosComentarios = [...comentarios, comentario];

        // Actualizar la BD
        firebase.db.collection('productos').doc(id).update({
            comentarios: nuevosComentarios
        });

        // Actualizar el state
        setProducto({
            ...producto,
            comentarios: nuevosComentarios
        })
    }

    return (
        <Layout>
            <>
                { error && <Error404></Error404> }

                <div className="contenedor">
                    <h1 css={ css`
                        text-align: center;
                        margin-top: 5rem; 
                    `}>{ nombre }</h1>
                    <ContenedorProducto>
                        <div>
                            <p>Publicado hace: { formatDistanceToNow(new Date(creado), { locale: es }) }</p>
                            <p>Publicado por: { creador.nombre } de { empresa }</p>
                            <Image
                                src={ urlImagen }
                                alt={ nombre }
                                width={ 700 }
                                height={ 350 }
                                layout="responsive"
                                quality={ 65 }
                            />
                            <p>{ descripcion }</p>
                            { usuario && (
                                <>
                                    <h2>Agrega tu comentario</h2>
                                    <form onSubmit={ agregarComentario }>
                                        <Campo>
                                            <input type="text" name="mensaje" onChange={ comentarioChange } />
                                        </Campo>
                                        <InputSubmit type="submit" value="Agregar comentario"></InputSubmit>
                                    </form>
                                </>
                            ) }
                            { comentarios.length > 0 &&
                                <>
                                    <h2 css={ css`margin: 2rem 0;` }>Comentarios</h2>
                                    <ul>
                                        { comentarios.map((comentario, index) => (
                                            <li key={ `comentario-${index}` }
                                                css={ css`border:1px solid #e1e1e1; padding: 2rem; margin-bottom: 1rem;` }>
                                                <p>{ comentario.mensaje }</p>
                                                <p>
                                                    Escrito por: <span css={ css`font-weight:bold;` }>{ ' ' } { comentario.usuarioNombre }</span>
                                                </p>
                                                {
                                                    esCreador(comentario.usuarioId) &&
                                                    <CreadorProducto>
                                                        Autor
                                                    </CreadorProducto>
                                                }
                                            </li>
                                        )) }
                                    </ul>
                                </>
                            }
                        </div>
                        <aside>
                            <Boton target="_blank" fullWidth bgColor="true" href={ url }>Visitar URL</Boton>
                            <div css={ css`margin-top: 5rem;` }>
                                { (usuario && !haVotado.includes(usuario.uid)) && <Boton onClick={ votarProducto } fullWidth>Votar</Boton> }
                                <p css={ css`text-align:center;` }>{ votos } Votos</p>
                            </div>
                        </aside>
                    </ContenedorProducto>
                </div>
            </>
        </Layout>
    )
}

export default Producto
