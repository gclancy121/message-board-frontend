import React from 'react';
import { useNavigate } from 'react-router-dom';


import "../../css/Profile.css";
const Profile = () => {
    const username = localStorage.getItem('username');
    const message = localStorage.getItem('message');

    const navigate = useNavigate();
    
    function logout() {
        localStorage.clear();
        window.location.reload();
    }
    
    function settings() {
        navigate(`/settings`)
    }

    //replace hard coded info with stateful info once DB is created for it
    return (
        <div className="container">
            <div className='message'>
                <h2>{message}</h2>
            </div>
            <div className='profile'>
                <h3>About Me</h3>
                <img id="profile-picture" src= "https://i.pinimg.com/736x/ba/a2/4e/baa24e0fbad55140f9103dcfc44894b0.jpg"/>
                <p>Username: {username}</p>
                <p>Posts: 0</p>
                <p>Favorite waifu: N/A</p>
            </div>
            <button onClick={logout}>Logout</button>
            <button onClick={settings}>Account Settings</button>
        </div>
    )
}

export default Profile;