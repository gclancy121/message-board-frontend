import React, {useState, useEffect} from 'react';
import axios from 'axios';

import URL from '../../utils/url';

import '../../css/posts/addPost.css';
function AddPost() {
    const initialPostForm = {
        post_title: '',
        post_body: ''
    }
    const [post, setPost] = useState(initialPostForm);
    const [message, setMessage] = useState('');
    const [id, setId] = useState(0);

    useEffect(() => {
        const username = localStorage.getItem('username');
        axios.get(`${URL}/users/${username}`).then(res => {
            const string = res.data.user_id;
            setId(parseInt(string));
        })
    }, [])
    const handleChange = evt => {
        setPost({
            ...post,
            [evt.target.name]: evt.target.value
        });
    };
    const onSubmit = evt => {
        evt.preventDefault();
        const newPost = {
            created_by: id,
            post_title: post.post_title,
            post_body: post.post_body
        }
        axios.post(`${URL}/posts/addpost`, newPost).then(res => {
            setMessage({
                message: res.data.message
            });
            setPost(initialPostForm);
        }).catch(err => {
            setMessage({
                message: err.response.data.message
            })
        })
    };

    function MessageAndButton() {
        if (message === '') {
            return (
                <></>
            )
        }
        else {
            return (
                <div classname='message'>
                    <h2>{message.message}, click <a className='byway' href='/posts'>here</a> to view it</h2>
                </div>
                
            )
        }
    }

    return (
        <> 
            <MessageAndButton />
            <div className='add-container'>
                <form onSubmit={onSubmit}>
                    <div className='header'>
                        <h3>Create New Post</h3>
                    </div>
                    <div className='form-group'>
                        <label>Post Title: </label>
                        <input type='text' name='post_title' id='post-title-input' value={post.post_title} onChange={handleChange} />
                    </div>
                    <div className='description-field'>
                        <p>Post Body: </p>
                        <textarea type='text' name='post_body' id='post-description-input' value={post.post_body} onChange={handleChange} />
                    </div>
                    <div className='submit-button'>
                        <input type='submit' id='submit-button' />
                    </div>
                </form>
            </div>
        </>
    )


}

export default AddPost;