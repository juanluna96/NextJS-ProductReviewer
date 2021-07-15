import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Producto = () => {
    // Routing para obtener el id actual
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            console.log('Ya hay un id', id)
        }
    }, [id]);

    return (
        <div>
            Desde producto n°{ id }
        </div>
    )
}

export default Producto
