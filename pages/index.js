import { collection, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import DetallesProducto from '../components/layout/DetallesProductos';
import Layout from '../components/layout/Layout';
import { FirebaseContext } from '../firebase';
import useEffectAsync from '../hooks/useEffectAsync';

const Heading = styled.h1`
  color:red;
`

const Home = () => {
  const [productos, guardarProductos] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  // useEffect(() => {
  //   (async () => {
  //     const productos = await obtenerProductos();
  //     console.log(productos);
  //   })();
  // }, []);

  useEffectAsync(async () => {
    const productos = await obtenerProductos();
    guardarProductos(productos);
  }, []);

  const obtenerProductos = async () => {
    const snapshot = await getDocs(collection(firebase.db, "productos"));
    const list = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    });
    return list;
  };

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <div className="bg-white">
              { productos.map((producto) => (
                <DetallesProducto
                  key={producto.id}
                  producto={producto} 
                />
              )) }
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home;