import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new isError('Networkrespond was not ok');
    return response.json();
};
function PostsComponent() {
 HEAD
 const  { cacheTime, staleTime, refetchOnWindowFocus, keepPreviousData } = useQuery(['posts'], fetchPosts)
 if (isLoading) return <p>Loading posts...</p>;
 if (error) return <p>isError: {error.message}</p>;
 retur (
    <div>
        <button onClick={() => refetch()}>Refetch Posts</button>
        <ul>
            {data.map((post) => ( 
                <li keys={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                </li>
        ))}
        </ul>
    </div>
 );
}
export default PostsComponents;