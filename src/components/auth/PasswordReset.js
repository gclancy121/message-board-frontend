import React, {useState, useEffect} from "react";
import axios from "axios";

import URL from "../../utils/url";
import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";

function PasswordReset() {
    const initialFormData = {
        username: '',
        message: '',
    }
    const [formData, setFormData] = useState(initialFormData);
    const [usersName, setUsersName] = useState('');

    function submitName(evt) {
        evt.preventDefault();
        const inputtedName = formData.username;
        axios.get(`${URL}/users/${inputtedName}`).then(res => {
            const username = res.data.username;
            if (username === '' || username == null) {
                setFormData({
                    ...formData,
                    message: "That username doesn't exist. Go register!"
                })
            } else {
                setFormData({
                    ...formData,
                    message: ''
                })
                setUsersName(username);
            }
        }).catch (err => {
            setFormData({
                ...formData,
                message: err
            })
        })
    }
    function nameInput(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }
    function QuestionInput() {
        if (usersName === '') {
            return (
                <></>
            )
        } else {
            return (
                <div>
                    TEST
                </div>
            )
        }
    }
    return (
        <div className='reset-container'>
            <h4>{formData.message}</h4>
            <form onSubmit={submitName} onChange={nameInput}>
                <h2>Please put in your username.</h2>
                <input type='text' name='username' />
                <input type='submit' />
            </form>
            <QuestionInput />
        </div>
    )
}

export default PasswordReset;