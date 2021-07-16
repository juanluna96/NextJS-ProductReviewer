import React, { useContext } from 'react'
import Link from 'next/link';
import { FirebaseContext } from '../../firebase';
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
    const { usuario, firebase } = useContext(FirebaseContext);

    return (
        <Nav>
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/populares"><a>Populares</a></Link>
            { usuario && <Link href="/nuevo-producto"><a>Nuevo producto</a></Link> }
        </Nav>
    )
}

export default Navegacion
