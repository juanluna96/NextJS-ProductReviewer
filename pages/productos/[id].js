import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';

import Error404 from '../../components/layout/Error404';
import Layout from '../components/layout/Layout';

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

    return (
        <Layout>
            <>
                { error && <Error404></Error404> }
            </>
        </Layout>
    )
}

export default Producto
