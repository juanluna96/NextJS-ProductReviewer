import React from 'react'
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="">
                <div className="">
                    <p>Pr</p>
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
            </div>
        </header>
    )
}

export default Header
