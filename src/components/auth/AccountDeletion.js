import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";

import URL from "../../utils/url";

function AccountDeletion() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const [id, setId] = useState(0);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get(`${URL}/users/${username}`).then(res => {
            setId(res.data.user_id);
        })
    }, [])
    function cancel() {
        navigate('/settings');
    }

    function confirm() {
        axios.delete(`${URL}/users/${id}`).then(res => {
            if (res.data === 1) {
                setSuccess(true);
                localStorage.clear();
            } else (
                setMessage('Something went wrong, please try again later.')
            )
        }).catch(err => {
            setMessage(err.response.data.message);
        })
        //alert('too bad, not working yet assclown');
    }

        function Success() {
            if (success === true) {
                return (
                    <div>
                        <p>Account deletion successful. Click <Link to='/'>here</Link> to return to the landing page.</p>
                    </div>
                )
            }
        }
    return (
        <div>
            {message}
            <h1>Are you sure you want to delete your account?</h1>
            <p>This is <strong>permanent</strong>. It can't be undone.</p>
            <button onClick={confirm}>Yes</button>
            <button onClick={cancel}>No, take me back!</button>
            <Success />
        </div>
    )
};


export default AccountDeletion;