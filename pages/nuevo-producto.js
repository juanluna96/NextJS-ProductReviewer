import React, { useState } from 'react'
import Layout from '../components/layout/Layout';
import Router from 'next/router';
import { css } from '@emotion/react';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';
import firebase from '../firebase';

const STATE_INICIAL = {
    nombre: '',
    empresa: '',
    imagen: '',
    url: '',
    descripcion: ''
}

const NuevoProducto = () => {
    const [error, setError] = useState(false);

    const { valores, errores, handleBur, handleSubmit, handleChange } = useValidacion(STATE_INICIAL, validarCrearCuenta, nuevoProducto);

    const { nombre, empresa, imagen, url, descripcion } = valores;

    function nuevoProducto() {
        console.log('Creando un nuevo producto');
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
                    >Nuevo producto</h1>
                    <Formulario onSubmit={ handleSubmit }>
                        <fieldset>
                            <legend>Información general</legend>
                            <Campo>
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" placeholder="Tu nombre" name="nombre" value={ nombre } onChange={ handleChange } onBlur={ handleBur } />
                            </Campo>
                            { errores.nombre && <Error>{ errores.nombre }</Error> }
                            <Campo>
                                <label htmlFor="empresa">Nombre de empresa o compañía</label>
                                <input type="text" id="empresa" placeholder="Tu empresa" name="empresa" value={ empresa } onChange={ handleChange } onBlur={ handleBur } />
                            </Campo>
                            { errores.empresa && <Error>{ errores.empresa }</Error> }
                            <Campo>
                                <label htmlFor="imagen">Imagen</label>
                                <input type="file" id="imagen" name="imagen" value={ imagen } onChange={ handleChange } onBlur={ handleBur } />
                            </Campo>
                            { errores.imagen && <Error>{ errores.imagen }</Error> }
                            <Campo>
                                <label htmlFor="url">Enlace del producto</label>
                                <input type="url" id="url" name="url" value={ url } onChange={ handleChange } onBlur={ handleBur } />
                            </Campo>
                            { errores.url && <Error>{ errores.url }</Error> }
                        </fieldset>

                        <fieldset>
                            <legend>Sobre tu producto</legend>
                            <Campo>
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea name="descripcion" id="descripcion" value={ descripcion } onChange={ handleChange } onBlur={ handleBur }></textarea>
                            </Campo>
                            { errores.descripcion && <Error>{ errores.descripcion }</Error> }
                        </fieldset>

                        <InputSubmit type="submit" value="Agregar producto" />
                    </Formulario>
                </>
            </Layout>
        </div>
    )
}

export default NuevoProducto
