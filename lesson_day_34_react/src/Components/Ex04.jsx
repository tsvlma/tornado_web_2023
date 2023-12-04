import axios from "axios";
import { useState, useEffect } from "react";


function Ex04 () {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState (1);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
            console.log(response)
            const jsonData = await response.data;

            setPosts(jsonData);


        };
        fetchPosts()
    }, [page]);
    return (
        <div>
            <h1>Paginated Posts</h1>
            <div>
                {posts.map(post => <p key={ post.id}>{post.title}</p>)}
            </div>
            <button className='m-2' onClick={()=> setPage(page => page -1)} disabled={page===1}> Previous</button>
            <button className='m-2' onClick={()=> setPage(page => page +1)}> Next</button>
        </div>
    );
}

export default Ex04;