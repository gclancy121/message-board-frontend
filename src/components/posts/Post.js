import React from "react";

const Post = (props) => {
    const {post} = props;

    return (
        <div className='post'>
            <h4>{post.post_name}</h4>
            <p>By test</p>
        </div>
    )
}

export default Post;