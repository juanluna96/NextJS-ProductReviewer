import React from 'react'
import Layout from '../components/layout/Layout';
import DetallesProducto from '../components/layout/DetallesProducto';
import useProductos from '../hooks/useProductos';

const Populares = () => {
    const { productos } = useProductos('votos');

    return (
        <div>
            <Layout>
                <div className="listado-productos">
                    <div className="contened">
                        <ul className="bg-white">
                            {
                                productos.map(producto => (
                                    <DetallesProducto key={ producto.id } producto={ producto }></DetallesProducto>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Populares
