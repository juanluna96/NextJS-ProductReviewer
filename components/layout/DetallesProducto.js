import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import styled from '@emotion/styled';

const Producto = styled.li`
    padding: 2rem 4rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #e1e1e1;
`;

const DescripcionProducto = styled.div`
    flex: 1;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;
    @media (min-width: 768px) {   
        display: grid;
    }
`;

const Comentarios = styled.div`
margin-top: 2rem;
display: flex;
align-items:center;
    div{
        display: flex;
        align-items:center;
        border: 1px solid #e1e1e1;
        padding:.3rem 1rem;
        margin-right: 2rem;
    }

    img{
        width: 2rem;
        margin-right: 2rem;
    }

    p{
        font-size: 1,6rem;
        margin: 0 1.5rem;
        font-weight: 700;

        &:last-of-type{
            margin: 0;
        }
    }
`;

const Votos = styled.div`
    flex: 0 0 auto;
    text-align: center;
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;
    padding: 1.5rem 2.5rem;
    max-height: 10rem;

    div{
        font-size: 2rem;
    }
`;

const ContenidoProducto = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Titulo = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;

    :hover{
        cursor: pointer;
    }
`;

const TextoDescripcion = styled.p`
    font-size:1.6rem;
    margin:0;
    color: #888;
`;

const DetallesProducto = ({ producto }) => {
    const { id, comentarios, creado, descripcion, empresa, nombre, url, urlImagen, votos } = producto;

    return (
        <Producto>
            <DescripcionProducto>
                <div className="">
                    <Image
                        src={ urlImagen }
                        alt={ nombre }
                        width={ 640 }
                        height={ 480 }
                        layout="responsive"
                        quality={ 100 }
                    />
                </div>
                <ContenidoProducto>
                    <div>
                        <Link passHref href="/productos/[id]" as={ `/productos/${id}` }>
                            <Titulo>{ nombre }</Titulo>
                        </Link>
                        <TextoDescripcion>{ descripcion }</TextoDescripcion>
                        <Comentarios>
                            <div className="">
                                <img
                                    src="/static/img/comentario.png"
                                    alt={ `comentarios-${id}` }
                                />
                                <p>{ comentarios.length } Comentarios</p>
                            </div>
                        </Comentarios>
                        <p>Publicado hace: { formatDistanceToNow(new Date(creado), { locale: es }) }</p>
                    </div>
                    <Votos>
                        <div>&#9650;</div>
                        <p>{ votos }</p>
                    </Votos>
                </ContenidoProducto>
            </DescripcionProducto>

        </Producto>
    )
}

export default DetallesProducto

