import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Nav = styled.nav`
    margin: 1rem 0;
    
    a{
        font-size:1.8rem;
        margin: 0 1.1rem;
        color:var(--gris2);
        font-family: 'PT Sans',sans-serif;

        &:last-of-type{
            margin-right: 0;
        }
    }
`;


const Navegacion = () => {
    return (
        <Nav>
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            <Link href="/nuevo-producto">Nuevo producto</Link>
        </Nav>
    )
}

export default Navegacion
