import React, {useState, useEffect} from "react";
import axios from "axios";
import URL from "../../../utils/url";

function CommentsList(props) {
    const {comment} = props;
    const [user, setUser] = useState('');

    useEffect(() => {
        axios.get(`${URL}/users/byid/${comment.comment_created_by}`).then(res => {
            setUser(res.data.username);
        })
    }, [])
    return (
       <div className='comment'>
            <h4>{user}</h4>
            <p>{comment.comment}</p>
       </div>
    )
    
}

export default CommentsList;