import React, {useState, useEffect} from 'react';
import axios from 'axios';
import URL from '../../utils/url';


function AccountSettings() {
    const username = localStorage.getItem('username');
    const initialProfile = {
       about_me: '',
       fav_waifu: '',
       profile_picture: '',
       username: '' 
    }

    const [profile, setProfile] = useState(initialProfile);
    const [success, setSuccess] = useState(false);
    
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
            profile_picture: profile.profile_picture,
            username: profile.username
        }
        axios.put(`${URL}/users/${id}`, (id, changes)).then(res => {
            const newProfile = res.data;
            setProfile(newProfile);
            setSuccess(true);
            localStorage.setItem('username', newProfile.username);
        }).catch(err => console.log(err));
       
    }
    function handleChange(evt) {
        setProfile({
            ...profile,
            [evt.target.name]: evt.target.value
        })
    }
    function SuccessMessage() {
        if (success) {
            return <h3>Changes successful.</h3>
        } else {
            return <></>
        }
    }

    return (
        <div className='settings-container'>
             <h1>Account Settings</h1>
             <SuccessMessage />
            <form onSubmit={onSubmit}>
                <div className="settings-container"> 
                    <h3>About Me</h3>
                    <textarea name="about_me" onChange={handleChange} value={profile.about_me}/>
                </div>
                <div className="settings-container">
                    <h3>Favorite Waifu</h3>
                    <input type='text' name='fav_waifu' onChange={handleChange} value={profile.fav_waifu} />
                </div>
                <div className="settings-container">
                    <h3>Profile Picture</h3>
                    <p>Must be a URL to another website. It won't error yet, but I'll be nice for now.</p>
                    <input type='text' name='profile_picture' onChange={handleChange} value={profile.profile_picture} />
                </div>
                <div className="settings-container">
                    <h3>Username</h3>
                    <input type='text' name='username' onChange={handleChange} value={profile.username} />
                </div>
                <button>Submit Changes</button>
            </form>
        </div>
    )
}


export default AccountSettings;