import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Posts () {
    const [posts, setPosts] = useState([]);

    useEffect (()=> {
        fetch('https://jsonplaceholder.typicode.com/Posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error=> console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold"> Posts</h1>
            <ul>
                {posts.map(post=>(
                <li key={post=>id}>
                    <Link to={`/posts/${post.id}`}className="text-blue-500 hover:text-blue-700">
                {post.title}
                </Link>
                </li> 
                ) )}
            </ul>
        </div>
    );
}

export default Posts;