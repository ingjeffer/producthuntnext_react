import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

const Heading = styled.h1`
  color:red;
`

export default function Home() {
  return (
    <div>
      <Layout>
        <Heading>Inicio</Heading> 
      </Layout>
    </div>
  )
}
