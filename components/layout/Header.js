import React, { useContext } from 'react'
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Boton from '../ui/Boton';
import { FirebaseContext } from '../../firebase';

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
    const { usuario, firebase } = useContext(FirebaseContext);

    return (
        <header css={ css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
        `}>
            <ContenedorHeader>
                <div css={ css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap:wrap;
                `}>
                    <Link passHref href="/">
                        <Logo>Pr</Logo>
                    </Link>
                    {/* Buscador aqui */ }
                    <Buscar></Buscar>
                    {/* Nav aqui */ }
                    <Navegacion></Navegacion>
                </div>
                <div css={ css`
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: column;
                    @media (min-width: 768px) {
                        flex-direction: row;
                        width: 40%;
                        justify-content: center;
                    }
                `}>
                    {
                        usuario
                            ? (
                                <>
                                    <p css={ css`
                                        margin-right: 2rem;
                                    `}>Hola: { usuario.displayName }</p>
                                    <Boton bgColor="true" onClick={ () => firebase.cerrarSesion() }>Cerrar sesión</Boton>
                                </>
                            )
                            : (
                                <>
                                    <Link passHref href="/login">
                                        <Boton bgColor="true">
                                            Login
                                        </Boton>
                                    </Link>
                                    <Link passHref href="/crear-cuenta">
                                        <Boton>
                                            Crear cuenta
                                        </Boton>
                                    </Link>
                                </>
                            )
                    }
                </div>
            </ContenedorHeader>
        </header >
    )
}

export default Header
