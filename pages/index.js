import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled'
import { FirebaseContext } from '../firebase';
import DetallesProducto from '../components/layout/DetallesProducto';

const Heading = styled.h1`
  color:red;
`;

const Home = () => {
  const [productos, setProductos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db.collection('productos').orderBy('creado', 'desc').onSnapshot(manejarSnapshot)
    }
    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })
    );

    setProductos(productos);
  }

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

export default Home
