import React from 'react'

const DetallesProducto = ({ producto }) => {
    const { id, comentarios, creado, descripcion, empresa, nombre, url, urImagen, votos } = producto;

    return (
        <li>
            <div className="">
                <div className="">

                </div>
                <div className="">
                    <h1>{ nombre }</h1>
                </div>
            </div>
            <div className=""></div>
        </li>
    )
}

export default DetallesProducto

