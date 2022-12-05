import React, {useState} from "react";
import {Link} from 'react-router-dom';

import axios from "axios";
import URL from "../../utils/url";

function PasswordReset2() {
    const id = localStorage.getItem('user_id');

    const initialFormData = {
        password: '',
        newPassword: '',
        message: '',
    }
    const [formData, setFormData] = useState(initialFormData);
    const [success, setSuccess] = useState('');

    function onChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    function onSubmit(evt) {
        evt.preventDefault();
        const newData = {
            password: formData.password,
            newPassword: formData.newPassword,
            id: id
        };
        axios.patch(`${URL}/users/reset-password`, newData).then(res => {
            setFormData(initialFormData);
            setSuccess(res.data.message);
            localStorage.clear();
        }).catch(err => {
            setFormData({
                ...formData,
                message: err.response.data.message
            })
        });
    }

    function ResetLogin() {
        if (success === 'success') {
            return (
                <div>
                    <p>Reset successful. Click <Link to='/login'>here</Link> to be taken to login.</p>
                </div>
            )
        } else {
            return <></>
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>{formData.message}</h2>
                <ResetLogin />
                <label>New Password: </label>
                <input type='password' name='password' value={formData.password} onChange={onChange} />
                <label>Conform New Password: </label>
                <input type='password' name='newPassword' value={formData.newPassword} onChange={onChange} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default PasswordReset2;