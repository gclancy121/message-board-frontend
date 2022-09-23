import React, {useState, useEffect} from "react";
import axios from "axios";
import URL from "../../utils/url";
import { useNavigate, useParams } from "react-router-dom";


function PostInformation() {
    const [post, setPost] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/posts/${id}`).then(res => {
            setPost(res.data);
       }).catch(err => {
        console.log(err);
       })
        
    }, [])
    function navToAll() {
        navigate('/posts');
    }
    return (
        <div>
            <button onClick={navToAll}>Return to All Posts</button>
            <h2>{post.post_title}</h2>
            <p>{post.post_body}</p>
        </div>
    )
}

export default PostInformation;