import React from 'react'
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ContenedorHeader = styled.div`
    max-width:1200px;
    width:95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color:var(--naranja);
    font-size:4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab',serif;
    margin-right: 2rem;
    cursor: pointer;
`;

const Header = () => {
    return (
        <header css={ css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
        `}>
            <ContenedorHeader>
                <div className="">
                    <Link passHref href="/">
                        <Logo>Pr</Logo>
                    </Link>
                    {/* Buscador aqui */ }
                    <Buscar></Buscar>
                    {/* Nav aqui */ }
                    <Navegacion></Navegacion>
                </div>
                <div className="">
                    {/* Menu de administracion */ }
                    <p>Hola: Juan</p>
                    <button>Cerrar sesión</button>
                    <Link href="/">Login</Link>
                    <Link href="/">Crear cuenta</Link>
                </div>
            </ContenedorHeader>
        </header>
    )
}

export default Header
