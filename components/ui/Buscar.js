import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  border: 1px solid var(--gris3);
  padding: 1rem;
  min-width: 300px;
`;

const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url('/static/img/buscar.png');
  background-repeat: no-repeat;
  position: absolute;
  right: 1px;
  top: 1px;
  background-color: white;
  border: none;
  // text-indent: -9999px;
  font-size: 0;

  &:hover{
    cursor: pointer;
  }
`;

const Buscar = () => {
  return (
    <form css={css`
      position: relative;
    `}>
      <InputText
        type="text" 
        placeholder="Buscar Producto"
        />

      <InputSubmit type="submit">Buscar</InputSubmit>
    </form>
  )
}

export default Buscar;
