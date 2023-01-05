import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../../utils/url';

import { fetchUsername,setUserId, fetchUserId } from '../../state/profileState';

import "../../css/Profile.css";

const Profile = () => {
    const welcome = localStorage.getItem('message');
    const [user, setUser] = useState({});
    const [message, setMessage] = useState('');
    const [postNum, setPostNum] = useState(-2);

    const navigate = useNavigate();
    

    useEffect(() => {
        setMessage(welcome);
        localStorage.removeItem('message');
        const profile = fetchUsername();
        axios.get(`${URL}/users/${profile}`).then(res => {
            setUser(res.data);
            setUserId(res.data.user_id);
            const id = fetchUserId();
            axios.get(`${URL}/posts/post-num/${id}`).then(res => {
                setPostNum(res.data.user_post_num);
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
        
    }, []);
    
    
    function logout() {
        localStorage.clear();
        navigate('/login');
    };
    
    function settings() {
        navigate(`/settings`);
    };
    function posts() {
        navigate(`/posts`);
    };
    return (
        <>
            <div className='welcome-message'>
                <h2>{message}</h2>
            </div>
            <div className="container">
                <div className='profile-left'>
                    <h3>About Me</h3>
                    <img id="profile-picture" src={user.profile_picture}/>
                    <h3>Username: </h3><p>{user.username}</p>
                </div> 
                <div className='profile-center'>
                    <h3>Post Count: </h3> {postNum}
                    <h3>Favorite Waifu: </h3> {user.fav_waifu}
                </div>
                <div className='profile-right'>
                    <h3>About Me:</h3> {user.about_me}
                </div>
                <div className='buttons'>
                    <button onClick={logout}>Logout</button>
                    <button onClick={settings}>Account Settings</button>
                    <button onClick={posts}>Posts</button>
                </div> 
                
            </div>
            
        </>
        
    )
}

export default Profile;