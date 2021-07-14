import React, { useContext, useState } from 'react'
import Layout from '../components/layout/Layout';
import Router, { useRouter } from 'next/router';
import FileUploader from "react-firebase-file-uploader";
import { css } from '@emotion/react';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarNuevoProducto from '../validacion/validarNuevoProducto';
import { FirebaseContext } from '../firebase';

const STATE_INICIAL = {
    nombre: '',
    empresa: '',
    imagen: '',
    url: '',
    descripcion: ''
}

const NuevoProducto = () => {
    // State de las imagenes
    const [nombreImagen, setNombreImagen] = useState('');
    const [subiendo, setSubiendo] = useState(false);
    const [progreso, setProgreso] = useState(0);
    const [urlImagen, setUrlImagen] = useState('');

    const [error, setError] = useState(false);

    const { valores, errores, handleBur, handleSubmit, handleChange } = useValidacion(STATE_INICIAL, validarNuevoProducto, crearProducto);

    const { nombre, empresa, imagen, url, descripcion } = valores;

    // Hook de routing para redireccionar
    const router = useRouter();

    // Context con las operaciones crud de firebase
    const { usuario, firebase } = useContext(FirebaseContext);

    async function crearProducto() {
        // Si el usuario no esta autenticado llevar al login
        if (!usuario) {
            return router.push('/login');
        }
        // Crear el objeto de nuevo producto
        const producto = {
            nombre, empresa, url, descripcion, urlImagen, votos: 0, comentarios: [], creado: Date.now()
        }
        // Insertarlo en la base de datos
        firebase.db.collection('productos').add(producto);

        return router.push('/');
    }

    const handleUploadStart = () => {
        setProgreso(0);
        setSubiendo(true);
    };

    const handleProgress = progreso => {
        setProgreso({ progreso });
    }

    const handleUploadError = error => {
        setSubiendo(error);
        console.error(error);
    };

    const handleUploadSuccess = filename => {
        setProgreso(100);
        setSubiendo(false);
        setNombreImagen(filename);
        firebase
            .storage
            .ref("productos")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                console.log(url);
                setUrlImagen(url);
            });
    };

    return (
        <div>
            <Layout>
                <>
                    <h1
                        css={ css`
                    text-align: center;
                    margin-top: 5rem;
                    `}
                    >Nuevo producto</h1>
                    <Formulario onSubmit={ handleSubmit }>
                        <fieldset>
                            <legend>Información general</legend>
                            <Campo>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" placeholder="Tu nombre" name="nombre" value={ nombre } onChange={ handleChange } onBlur={ handleBur } />
                            </Campo>
                            { errores.nombre && <Error>{ errores.nombre }</Error> }
                            <Campo>
                                <label htmlFor="empresa">Nombre de empresa o compañía</label>
                                <input type="text" id="empresa" placeholder="Tu empresa" name="empresa" value={ empresa } onChange={ handleChange } onBlur={ handleBur } />
                            </Campo>
                            { errores.empresa && <Error>{ errores.empresa }</Error> }
                            <Campo>
                                <label htmlFor="imagen">Imagen</label>
                                <FileUploader
                                    accept="image/*"
                                    id="imagen"
                                    name="imagen"
                                    randomizeFilename
                                    storageRef={ firebase.storage.ref("productos") }
                                    onUploadStart={ handleUploadStart }
                                    onUploadError={ handleUploadError }
                                    onUploadSuccess={ handleUploadSuccess }
                                    onProgress={ handleProgress }
                                />
                            </Campo>
                            <Campo>
                                <label htmlFor="url">Enlace del producto</label>
                                <input type="url" id="url" name="url" value={ url } onChange={ handleChange } onBlur={ handleBur } />
                            </Campo>
                            { errores.url && <Error>{ errores.url }</Error> }
                        </fieldset>

                        <fieldset>
                            <legend>Sobre tu producto</legend>
                            <Campo>
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea name="descripcion" id="descripcion" value={ descripcion } onChange={ handleChange } onBlur={ handleBur }></textarea>
                            </Campo>
                            { errores.descripcion && <Error>{ errores.descripcion }</Error> }
                        </fieldset>

                        { error && <Error>{ error }</Error> }

                        <InputSubmit type="submit" value="Agregar producto" />
                    </Formulario>
                </>
            </Layout>
        </div>
    )
}

export default NuevoProducto
