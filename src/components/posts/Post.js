import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "../../utils/url";

import '../../css/posts/Post.css'
const Post = (props) => {
    const {post} = props;
    const [username, setUsername] = useState('');
    const creator_id = post.created_by
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/posts/get-creator/${creator_id}`).then(result => {
            setUsername(result.data.poster_name);
        })
    }, [])
    
    function redirect() {
        navigate(`/posts/${post.post_id}`)
    }

    return (
        <div className='post'>
            <h4 id='post-title' onClick={redirect}>{post.post_title}</h4>
            <p>By {username}</p>
        </div>
    )
}

export default Post;