import React from 'react'
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router'

const Buscar = () => {
    const router = useRouter();
    const { q } = router.query;

    return (
        <div>
            <Layout>
                <h1>Buscar</h1>
            </Layout>
        </div>
    )
}

export default Buscar
