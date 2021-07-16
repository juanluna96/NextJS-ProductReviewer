import React from 'react'
import { css } from '@emotion/react'

const Error404 = () => {
    return (
        <h1 css={ css`
            margin-top: 5rem;
            text-align: center;
        `}>La pagina que estas buscando no se encuentra disponible</h1>
    )
}

export default Error404
