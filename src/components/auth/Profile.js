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
                    <h3>Post Count: </h3> 0
                    <h3>Favorite Waifu: </h3> {profile.fav_waifu}
                </div>
                <div className='profile-right'>
                    <h3>About Me:</h3> {profile.about_me}
                </div>
                <div className='buttons'>
                    <button onClick={logout}>Logout</button>
                    <button onClick={settings}>Account Settings</button>
                </div> 
                
            </div>
            
        </>
        
    )
}

export default Profile;