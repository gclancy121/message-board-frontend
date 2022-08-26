import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import URL from '../url';

const LoginForm = () => {
    const initialLoginForm = {
        username: '',
        password: ''
    }

    const [login, setLogin] = useState(initialLoginForm);
    const navigate = useNavigate();

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
       axios.post(`${URL}/auth/login`, newForm).then(res => {
        const data = res.data;
        localStorage.setItem('authorization', data.token);
        localStorage.setItem('message', data.message);
        setLogin(initialLoginForm)
        navigate('/profile')
        })
    }
   return (
    <div className="login">
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

        </form>

    </div>
   )
}

export default LoginForm;