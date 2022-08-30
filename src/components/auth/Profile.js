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

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/users/${username}`).then(res => {
            setProfile(res.data);
        })
        setMessage(welcome);
        localStorage.removeItem('message');
    }, [])
    
    function logout() {
        localStorage.clear();
        window.location.reload();
    }
    
    function settings() {
        navigate(`/settings`)
    }
    //replace hard coded posts when DB created
    return (
        <div className="container">
            <div className='message'>
                <h2>{message}</h2>
            </div>
            <div className='profile'>
                <h3>About Me</h3>
                <img id="profile-picture" src={profile.profile_picture}/>
                <p>Username: {username}</p>
                <p>Posts: 0</p>
                <p>Favorite waifu: {profile.fav_waifu}</p>
                <p>About Me: {profile.about_me}</p>
            </div>
            <button onClick={logout}>Logout</button>
            <button onClick={settings}>Account Settings</button>
        </div>
    )
}

export default Profile;