import React from 'react';
import Image from 'next/image';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const DetallesProducto = ({ producto }) => {
    const { id, comentarios, creado, descripcion, empresa, nombre, url, urlImagen, votos } = producto;

    return (
        <li>
            <div className="">
                <div className="">
                    <Image
                        src={ urlImagen }
                        alt={ nombre }
                        width={ 200 }
                        height={ 200 }
                    />
                </div>
                <div className="">
                    <h1>{ nombre }</h1>
                    <p>{ descripcion }</p>
                    <div>
                        <Image
                            src="/static/img/comentario.png"
                            alt={ `comentarios-${id}` }
                            width={ 200 }
                            height={ 200 }
                        />
                        <p>{ comentarios.length } Comentarios</p>
                    </div>
                    <p>Publicado hace: { formatDistanceToNow(new Date(creado), { locale: es }) }</p>
                </div>
            </div>
            <div>
                <div>&#9650;</div>
                <p>{ votos }</p>
            </div>
        </li>
    )
}

export default DetallesProducto

