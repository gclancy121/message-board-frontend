import axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import URL from '../../utils/url';


import '../../css/auth/Login.css'

const LoginForm = () => {
    const initialLoginForm = {
        username: '',
        password: '',
        error: ''
    }
    const [login, setLogin] = useState(initialLoginForm);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = evt => {
        setLogin({
            ...login,
            [evt.target.name]: evt.target.value
        });
    }
    const onSubmit = evt => {
        evt.preventDefault();
        const newForm = {
            username: login.username,
            password: login.password
        }
       axios.post(`${URL}/users/login`, newForm).then(res => {
        const data = res.data
        localStorage.setItem('username', newForm.username);
        localStorage.setItem('authorization', data.token);
        localStorage.setItem('message', data.message);
        setLogin(initialLoginForm);
        setLoggedIn(true);
        }).catch(err => {
            const error = err.response.data.message;
            setLogin({
                ...login,
                error: error
            })
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
            <h2>{login.error}</h2>
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
                        <input type='text' id='username-login' name='username' value={login.username} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <input type='password' id='password-login' name='password' value={login.password} onChange={handleChange}/>
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