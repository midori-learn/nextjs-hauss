import React from 'react'
import { useRouter } from 'next/dist/client/router';

interface Props {
    
}

export default function ParamsPage({}: Props) {
    const router = useRouter()
    return (
        <div>
            <h1>Params Page</h1>
            <p>query: {JSON.stringify(router.query)} </p>
        </div>
    )
}
