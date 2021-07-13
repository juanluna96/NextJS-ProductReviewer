import React, { useState } from 'react'
import Layout from '../components/layout/Layout';
import Router from 'next/router';
import { css } from '@emotion/react';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';
import firebase from '../firebase';

const STATE_INICIAL = {
    email: '',
    password: ''
}

const Login = () => {
    const [error, setError] = useState(false);

    const { valores, errores, handleBur, handleSubmit, handleChange } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

    const { email, password } = valores;

    async function iniciarSesion() {
        try {
            await firebase.login(email, password);
            Router.push('/');
        } catch (error) {
            console.error('Hubo un error al iniciar sesión', error.message);
            setError(error.message);
        }
    }

    return (
        <div>
            <Layout>
                <>
                    <h1
                        css={ css`
                    text-align: center;
                    margin-top: 5rem;
                    `}
                    >Iniciar sesión</h1>
                    <Formulario onSubmit={ handleSubmit }>
                        <Campo>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" placeholder="Tu correo" name="email" value={ email } onChange={ handleChange } onBlur={ handleBur } />
                        </Campo>
                        { errores.email && <Error>{ errores.email }</Error> }
                        <Campo>
                            <label htmlFor="password">Correo electrónico</label>
                            <input type="password" id="password" placeholder="Tu contraseña" name="password" value={ password } onChange={ handleChange } onBlur={ handleBur } />
                        </Campo>
                        { errores.password && <Error>{ errores.password }</Error> }
                        { error && <Error>{ error }</Error> }
                        <InputSubmit type="submit" value="Iniciar sesión" />
                    </Formulario>
                </>
            </Layout>
        </div>
    )
}

export default Login
