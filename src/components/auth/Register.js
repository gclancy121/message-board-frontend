import React, {useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import URL from '../../utils/url';

import '../../css/auth/Register.css';
const RegisterForm = () => {
    const initialRegisterForm = {
        username: '',
        password: '',
        security_question: '',
        security_question_answer: '',
        message: ''
    }
    const [register, setRegister] = useState(initialRegisterForm);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = evt => {
        setRegister({
            ...register,
            [evt.target.name]: evt.target.value
        });
    };
    
    const onSubmit = evt => {
        evt.preventDefault();
        const newUser = {
            username: register.username,
            password: register.password,
            security_question: register.security_question,
            security_question_answer: register.security_question_answer
        }
        axios.post(`${URL}/users/register`, newUser).then(res => {
           setRegister({
            ...initialRegisterForm,
            message: res.data.message
           });
           setIsRegistered(true);
        }).catch(err => {
            setRegister({
                ...register,
                message: err.response.data.message
            });
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
        <>
            <div className="message">
                <h2>{register.message}</h2>
                <LoginButton />
            </div>
            <div className="register-container">
                <form onSubmit={onSubmit}>
                    <div className='header'>
                        <h3>Register</h3>
                    </div>
                    <div className="form-group">
                        <label>Username </label>
                        <input type='text' name='username' id='username-register' value={register.username} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <input type='password' name='password' id='password-register' value={register.password} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Security Question: </label>
                        <select value={register.security_question} name="security_question" onChange={handleChange}>
                            <option value=''>---Select a Question---</option>
                            <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                            <option value="What street did you grow up on?">What street did you grow up on?</option>
                            <option value="What was the name of your first pet?">What was the name of your first pet?</option>
                            <option value="What high school did you attend?">What high school did you attend?</option>
                            <option value="What year was your father (or mother) born?">What year was your father (or mother) born?</option>
                            <option value="What was your favorite food as a child?">What was your favorite food as a child?</option>
                            <option value="What was the model of your first car?">What was the model of your first car?</option>
                            <option value="What city did you meet your spouse/significant other in?">What city did you meet your spouse/significant other in?</option>
                        </select>
                        <input type='text' name="security_question_answer" onChange={handleChange} />
                    </div>
                    <div className="submit">
                        <input type='submit' id='submit-button' />
                    </div>
                    <div className="login-link">
                        <p>Already registered? Log in <Link to='/login'>here.</Link></p>
                    </div>
                </form>
                <div className="fluff">
                    <h2>Welcome to Weeb Central!</h2>
                    <p>I'm glad you decided to come and give us a visit. This site is incomplete right now - I know that. I'm working on it.
                        But I'm only one person and I can only do so much in one day - I hope you enjoy my site regardless!
                    </p>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;