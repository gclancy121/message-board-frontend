import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/account-actions'

import "../../css/Profile.css";
const Profile = (props) => {
    const {user, fetchAccount} = props;
    const welcome = localStorage.getItem('message');
    const [message, setMessage] = useState('');
    const [postNum, setPostNum] = useState(-2);

    const navigate = useNavigate();
    

    useEffect(() => {
        setMessage(welcome);
        localStorage.removeItem('message');
        fetchAccount('SachiKing');
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

export default connect(st => st, actions)(Profile);