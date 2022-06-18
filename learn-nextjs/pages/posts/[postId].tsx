import React from 'react'
import { useRouter } from 'next/dist/client/router';
interface PostDetailPageProps {
    
}

const PostDetailPage = (props) => {
    const route = useRouter()
    return (
        <div>
            <h1>Create Post Detail</h1>
            <p>Query: {JSON.stringify(route.query)}</p>
        </div>
    )
}

export default PostDetailPage
