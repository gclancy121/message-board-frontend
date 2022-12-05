import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import URL from "../../utils/url";

function PasswordReset() {
    const initialFormData = {
        username: '',
        security_question: '',
        security_question_answer: '',
        message: ''
    }
    const [formData, setFormData] = useState(initialFormData);
    const [passed, setPassed] = useState(false);

    function handleSubmit(evt) {
        evt.preventDefault();
        const data = {
            username: formData.username,
            security_question: formData.security_question,
            security_question_answer: formData.security_question_answer
        }
       axios.post(`${URL}/users/reset-checks`, data).then(result => {
        setPassed(true);
        setFormData(initialFormData);
        localStorage.setItem('user_id', result.data.id);
       }).catch(err => {
        setFormData({
            ...formData,
            message: err.response.data.message
        })
       })
    }

    function NavToReset() {
        if (passed === true) {
            return (
                <p>Identity validated. Click <Link to='/password-reset-2'>here</Link> to reset your password.</p>
            )
        } else {
            return (
                <></>
            )
        }
    }

    function handleChange(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }   
    return (
        <div className='reset-container'>
            <h3>{formData.message}</h3>
            <form onSubmit={handleSubmit}>
                <h2>Username:</h2>
                <input type='text' name='username' value={formData.username} onChange={handleChange}/>
                <h2>Security Question & Answer: </h2>
                <select value={formData.security_question} onChange={handleChange} name='security_question'>
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
                <input type="text" value={formData.security_question_answer} onChange={handleChange} name='security_question_answer' />
                <input type='submit' />
                <NavToReset />
            </form>
        </div>
    )
}

export default PasswordReset;