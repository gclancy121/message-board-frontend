import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import URL from '../../utils/url';

import '../../css/auth/AccountSettings.css';
function AccountSettings() {
    const username = localStorage.getItem('username');
    const initialProfile = {
       about_me: '',
       fav_waifu: '',
       profile_picture: ''
    }

    const [profile, setProfile] = useState(initialProfile);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${URL}/users/${username}`).then(res => {
            setProfile(res.data);
        })
    }, [])

    function onSubmit(evt) {
        evt.preventDefault();
        const id = profile.user_id;
            const changes = {
                about_me: profile.about_me,
                fav_waifu: profile.fav_waifu,
                profile_picture: profile.profile_picture
            }
            axios.put(`${URL}/users/${id}`, (id, changes)).then(res => {
                const newProfile = res.data;
                setProfile(newProfile);
                setSuccess(true);
            }).catch(err => {
                setMessage(err.response.data.message);
            });
    }
    function handleChange(evt) {
        setProfile({
            ...profile,
            [evt.target.name]: evt.target.value
        })
    }
    function ErrorMessage() {
        if (message === '') {
            return <></>
        } else {
            return <h3>{message}</h3>
        }
    }
    function SuccessMessage() {
        if (success) {
            return <h3>Changes successful.</h3>
        } else {
            return <></>
        }
    }
    function cancel() {
        navigate('/profile');
    }
    return (
        <div className='settings-container'>
             <h1>Account Settings</h1>
             <SuccessMessage />
             <ErrorMessage />
            <form onSubmit={onSubmit}>
                <button>Submit Changes</button>
                <div className="setting"> 
                    <h3>About Me</h3>
                    <textarea name="about_me" onChange={handleChange} value={profile.about_me}/>
                </div>
                <div className="setting">
                    <h3>Favorite Waifu</h3>
                    <input type='text' name='fav_waifu' onChange={handleChange} value={profile.fav_waifu} />
                </div>
                <div className="setting">
                    <h3>Profile Picture</h3>
                    <p>Website URL</p>
                    <input type='text' name='profile_picture' onChange={handleChange} value={profile.profile_picture} />
                </div>
            </form>
            <h2>Return</h2>
            <button onClick={cancel}>Return</button>
        </div>
    )
}


export default AccountSettings;