import axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import URL from '../../utils/url';

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
        const data = res.data;
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
    <div className="login">
        <div className='message'>
            <h2>{login.error}</h2>
            <LoggedInButton />
        </div>
        <form onSubmit={onSubmit}>
            <div className="header">
                <h3>Login</h3>
            </div>
            <div className="form-group">
                <label>Username </label>
                <input type='text' name='username' value={login.username} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Password </label>
                <input type='password' name='password' value={login.password} onChange={handleChange}/>
            </div>
            <div className="submit">
                <input type='submit' />
            </div>
            <div className="form-group">
                <p>Not yet registered? Register <Link to='/register'>here.</Link></p>
            </div>
        </form>

    </div>
   )
}

export default LoginForm;