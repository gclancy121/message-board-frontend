import axios from 'axios';
import React, {useState} from 'react';
import URL from '../url';

const LoginForm = () => {
    const initialLoginForm = {
        username: '',
        password: ''
    }

    const [login, setLogin] = useState(initialLoginForm);

    const handleChange = evt => {
        // console.log(evt.target.value);
        setLogin({
            ...login,
            [evt.target.name]: evt.target.value
        });
    }
    const onSubmit = evt => {
        console.log(URL);
        evt.preventDefault();
        const newForm = {
            username: login.username,
            password: login.password
        }
        console.log(newForm);
        setLogin(initialLoginForm);
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