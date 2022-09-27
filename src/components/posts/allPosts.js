import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../../utils/url';

import Post from './Post';

import '../../css/posts/allPosts.css';
function AllPosts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/posts`).then(res => {
            setPosts(res.data);
        })
    }, [])
    function addPost() {
        navigate('/posts/add-post');
    }
    return (
        <> 
             <div className='postboard-title'>
                <h1>Postboard Central</h1>
            </div>
            <div className='post-buttons'>
                <button onClick={addPost}>Make Post</button>
            </div>
            <div className='post-list'>
                {posts.map(post => <Post post={post} key={post.post_id} />)}
            </div>
        </>
    )
}

export default AllPosts;