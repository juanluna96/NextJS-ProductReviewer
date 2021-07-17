import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const InputText = styled.input`
    border: 1px solid var(--gris3);
    padding:1rem;
    min-width:300px;
`;

const InputSubmit = styled.button`
    height:3rem;
    width: 3rem;
    display: block;
    background-size:4rem;
    background-image: url('static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right:1rem;
    top: 1px;
    background-color: white;
    border:none;
    text-indent: -9999;

    &:hover{
        cursor:pointer;
    }
`;


const Buscar = () => {
    const [busqueda, setBusqueda] = useState('');

    const buscarProducto = (e) => {
        e.preventDefault();
        if (busqueda.trim() === "") return;

        // Redireccionar a buscar
    }

    return (
        <form css={ css`position:relative;` } onSubmit={ buscarProducto }>
            <InputText type="text" placeholder="Buscar productos" onChange={ e => setBusqueda(e.target.value) } />
            <InputSubmit type="submit"></InputSubmit>
        </form>
    )
}

export default Buscar
