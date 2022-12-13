import React, {useState, useEffect} from "react";
import URL from "../../../utils/url";
import axios from "axios";

import Comment from "./Comment";
import "../../../css/posts/comments/allComments.css";

function AllComments(props) {
    const {id} = props;
    const username = localStorage.getItem("username");

    const initialCommentText = {
        comment: ''
    }
    const [comment, setComment] = useState(initialCommentText);
    const [userId, setUserId] = useState(0);
    const [commentList, setCommentList] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`${URL}/users/${username}`).then(res => {
            setUserId(res.data.user_id);
        }).catch(err => {
            console.log(err);
        })
        axios.get(`${URL}/comments/${id}`).then(res => {
            setCommentList(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const onChange = (evt) => {
        setComment({
            ...comment,
            [evt.target.name]: evt.target.value
        });
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        const newComment = {
            comment: comment.comment,
            post_id: id,
            comment_created_by: userId
        }
        axios.post(`${URL}/comments`, newComment).then(res => {
            setComment(initialCommentText);
            location.reload();
        }).catch(err => {
            setError(err.response.data.message);
        })
    }

    return (
        <div className='comment-container'>
            <h4>Comments</h4>
            <div className='comments-list'>
                {commentList.map(comment => <Comment comment={comment} key={comment.comment_id} />)}
            </div>
            <form onSubmit={onSubmit}>
                <label><h4>Add A Comment</h4></label>
                <p>{error}</p>
                <input type='text' placeholder='Add your voice to the discussion' value={comment.comment} onChange={onChange} name='comment' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AllComments;