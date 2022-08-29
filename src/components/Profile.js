import React from 'react';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
    const username = localStorage.getItem('username');
    const message = localStorage.getItem('message');
    
    const navigate = useNavigate();

    function logout() {
        navigate('/logout');
    }
    return (
        <div className="container">
            <div className='message'>
                <h2>{message}</h2>
            </div>
            <div className='profile'>
            <p>Username: {username}</p>
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile;