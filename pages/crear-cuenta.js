import React from 'react'
import Layout from '../components/layout/Layout';

const CrearCuenta = () => {
    return (
        <div>
            <Layout>
                <>
                    <h1>Crear cuenta</h1>
                    <form>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Tu nombre" name="nombre" />
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" placeholder="Tu correo" name="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Correo electrónico</label>
                            <input type="password" id="password" placeholder="Tu contraseña" name="password" />
                        </div>
                        <input type="submit" value="Crear cuenta" />
                    </form>
                </>
            </Layout>
        </div>
    )
}

export default CrearCuenta
