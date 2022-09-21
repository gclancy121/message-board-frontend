import React,{ useState, useEffect } from 'react';

import Post from './Post';


function AllPosts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        
    }, [])

    return (
        <div>
            Uh oh this is in progress and it's 4 pm
        </div>
    )
}

export default AllPosts;