import React, {useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import URL from '../../utils/url';

const RegisterForm = () => {
    const initialRegisterForm = {
        username: '',
        password: '',
        message: ''
    }
    const [register, setRegister] = useState(initialRegisterForm);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = evt => {
        setRegister({
            ...register,
            [evt.target.name]: evt.target.value
        });
    }
    const onSubmit = evt => {
        evt.preventDefault();
        const newUser = {
            username: register.username,
            password: register.password
        }
        axios.post(`${URL}/auth/register`, newUser).then(res => {
           setRegister({
            ...initialRegisterForm,
            message: res.data.message
           });
           setIsRegistered(true);
        }).catch(err => {
            setRegister({
                ...register,
                message: err.response.data.message});
        })
    }

    function LoginButton() {
        if (isRegistered) {
            return <h3>Click <Link to='/login'>here </Link>to log in.</h3>
        } else {
            return <></>
        }
    }

    return (
        <div className="register">
            <div className="message">
                <h2>{register.message}</h2>
                <LoginButton />
            </div>
            <form onSubmit={onSubmit}>
                <div className='header'>
                    <h3>Register</h3>
                </div>
                <div className="form-group">
                    <label>Username </label>
                    <input type='text' name='username' value={register.username} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password </label>
                    <input type='password' name='password' value={register.password} onChange={handleChange} />
                </div>
                <div className="submit">
                    <input type='submit' />
                </div>
                <div className="form-group">
                    <p>Already registered? Log in <Link to='/login'>here.</Link></p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;