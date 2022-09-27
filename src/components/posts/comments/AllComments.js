import React, {useState, useEffect} from "react";

import Comment from "./Comment";

function AllComments(props) {
    const {id} = props;
    const initialCommentText = {
        comment: ''
    }
    const [comment, setComment] = useState(initialCommentText);

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
            created_by: id
        }
        console.log(newComment);
        alert('Not functional yet, comments coming soon!')
    }

    return (
        <div className='comment-container'>
            <div className='comments'>
                <h4>Comments</h4>
                <Comment id={id}/>
            </div>
            <form onSubmit={onSubmit}>
                <label><h4>Add A Comment</h4></label>
                <input type='text' placeholder='Add your voice to the discussion' value={comment.comment} onChange={onChange} name='comment' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AllComments;