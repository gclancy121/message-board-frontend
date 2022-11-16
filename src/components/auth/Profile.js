import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../../utils/url';


import "../../css/Profile.css";
const Profile = () => {
    const username = localStorage.getItem('username');
    const welcome = localStorage.getItem('message');
    const [profile, setProfile] = useState({});
    const [message, setMessage] = useState('');
    const [postNum, setPostNum] = useState(5600);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const profileData = await axios.get(`${URL}/users/${username}`);
            const id = profileData.data.user_id;
            const posts = await axios.get(`${URL}/posts/post-num/${id}`);
            setProfile(profileData.data);
            setPostNum(posts.data.user_post_num)
        }
        fetchData();
        setMessage(welcome);
        localStorage.removeItem('message');
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
                    <img id="profile-picture" src={profile.profile_picture}/>
                    <h3>Username: </h3><p>{username}</p>
                </div> 
                <div className='profile-center'>
                    <h3>Post Count: </h3> {postNum}
                    <h3>Favorite Waifu: </h3> {profile.fav_waifu}
                </div>
                <div className='profile-right'>
                    <h3>About Me:</h3> {profile.about_me}
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