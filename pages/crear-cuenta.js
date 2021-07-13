import React from 'react'
import Layout from '../components/layout/Layout';
import { css } from '@emotion/react';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: ''
}

const CrearCuenta = () => {
    const crearCuenta = () => {
        console.log('Creando cuenta...');
    }

    const { valores, errores, submitForm, handleBur, handleSubmit, handleChange } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

    const { nombre, email, password } = valores;

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
                    <Formulario onSubmit={ handleSubmit }>
                        <Campo>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Tu nombre" name="nombre" value={ nombre } onChange={ handleChange } onBlur={ handleBur } />
                        </Campo>
                        { errores.nombre && <Error>{ errores.nombre }</Error> }
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
                        <InputSubmit type="submit" value="Crear cuenta" />
                    </Formulario>
                </>
            </Layout>
        </div>
    )
}

export default CrearCuenta
