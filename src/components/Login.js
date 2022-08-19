import axios from 'axios';
import React, {useState} from 'react';
import URL from '../url';

const LoginForm = () => {
    const initialLoginForm = {
        username: '',
        password: ''
    }

    const [newLogin, setNewLogin] = useState(initialLoginForm);

    const handleChange = evt => {
        setNewLogin({
            ...newLogin,
            [evt.target.name]: evt.target.value
        });
    }
    const onSubmit = evt => {
        evt.preventDevault();
        const form = evt.target;
        const newLogin = {
            username: form.username.value,
            password: form.password.value
        };
        
    }
console.log(`${URL}login`);
   return (
    <div className="login">
        <form>
            <div className="header">
                <h3>Login</h3>
            </div>
            <div className="form-group">
                <label>Username </label>
                <input type='text'/>
            </div>
            <div className="form-group">
                <label>Password </label>
                <input type='password' />
            </div>
            <div className = "submit">
                <button>Submit</button>
            </div>

        </form>

    </div>
   )
}

export default LoginForm;