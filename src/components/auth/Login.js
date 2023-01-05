import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import URL from '../../utils/url';
import {setUsername} from '../../state/profileState';

import '../../css/auth/Login.css'


//LOOK INTO DELAYING THE REACT, NOT THE REDUX - COULD BE A POTENTIAL FIX?

const LoginForm = () => {
    const initialLoginForm = {
        username: '',
        password: '',
        error: ''
    }
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = evt => {
        setLoginForm({
            ...loginForm,
            [evt.target.name]: evt.target.value
        });
    }
    const onSubmit = evt => {
        evt.preventDefault();
        const newForm = {
            username: loginForm.username,
            password: loginForm.password
        }
        axios.post(`${URL}/users/login`, newForm).then(res => {
            setUsername(res.data.username);
            localStorage.setItem('authorization', res.data.token);
            localStorage.setItem('message', res.data.message);
            setLoggedIn(true);
        })
    }

    function LoggedInButton() {
        if (loggedIn) {
            return <h3>Login successful! Click <Link to='/profile'>here</Link> to go to your profile.</h3>
        } else {
            return <></>
        }
    }

   return (
    <> 
        <div className='error'>
            <h2>{loginForm.error}</h2>
            <LoggedInButton />
        </div>
        <div className="login-container">
            <div className="login">
                <form onSubmit={onSubmit}>
                    <div className="header">
                        <h3>Login</h3>
                    </div>
                    <div className="form-group">
                        <label id='username-text'>Username </label>
                        <input type='text' id='username-login' name='username' value={loginForm.username} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <input type='password' id='password-login' name='password' value={loginForm.password} onChange={handleChange}/>
                    </div>
                    <div className="submit">
                        <input type='submit' id='submit-button' />
                    </div>
                    <div className="links">
                        <p>Not yet registered? Register <Link to='/register'>here.</Link></p>
                        <p>Forgot password? Click <Link to='/password-reset'>here</Link> to reset it.</p>
                    </div>
                </form>
            </div>
            <div className="fluff">
                <h2>Welcome Back to Weeb Central!</h2>
                <p> If this is your first time here, go ahead and click the "Register Now" button.
                    But if you're not, thanks for coming back. I'm glad you like the place. I'm doing my best to get it up, so thanks for the patience.
                </p>
            </div>
        </div>
    </>
    
   )
}

export default LoginForm;