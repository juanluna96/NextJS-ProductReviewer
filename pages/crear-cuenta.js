import React from 'react'
import Layout from '../components/layout/Layout';
import { css } from '@emotion/react';
import { Formulario, Campo, InputSubmit } from '../components/ui/Formulario';

const CrearCuenta = () => {
    return (
        <div>
            <Layout>
                <>
                    <h1
                        css={ css`
                    text-align: center;
                    margin-top: 5rem;
                    `}
                    >Crear cuenta</h1>
                    <Formulario>
                        <Campo>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Tu nombre" name="nombre" />
                        </Campo>
                        <Campo>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" placeholder="Tu correo" name="email" />
                        </Campo>
                        <Campo>
                            <label htmlFor="password">Correo electrónico</label>
                            <input type="password" id="password" placeholder="Tu contraseña" name="password" />
                        </Campo>
                        <InputSubmit type="submit" value="Crear cuenta" />
                    </Formulario>
                </>
            </Layout>
        </div>
    )
}

export default CrearCuenta
