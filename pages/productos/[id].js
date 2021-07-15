import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Error404 from '../../components/layout/Error404';
import Layout from '../../components/layout/Layout';

const ContenedorProducto = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;


const Producto = () => {
    // State del componente
    const [producto, setProducto] = useState('');
    const [error, setError] = useState(false);

    // Routing para obtener el id actual
    const router = useRouter();
    const { id } = router.query;

    const { firebase } = useContext(FirebaseContext);

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
    }, [id]);

    if (Object.keys(producto).length === 0) return 'Cargando...';

    const { comentarios, creado, descripcion, empresa, nombre, url, urlImagen, votos } = producto;

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
                        <div>1</div>
                        <aside>2</aside>
                    </ContenedorProducto>
                </div>
            </>
        </Layout>
    )
}

export default Producto
