import React, {useState} from "react";
import axios from "axios";
import URL from "../../utils/url";

import '../../css/non-user-actions/Complaint.css';
function Complaint() {
    const initialComplaintForm = {
        name: '',
        email: '',
        complaint: ''
    }
    const [complaint, setComplaint] = useState(initialComplaintForm);
    const [message, setMessage] = useState('');

    const handleChange = evt => {
        setComplaint({
            ...complaint,
            [evt.target.name]: evt.target.value
        });
    }
    const onSubmit = evt => {
        evt.preventDefault();
        const newComplaint = {
            name: complaint.name,
            email: complaint.email,
            complaint: complaint.complaint
        }
        axios.post(`${URL}/complaints`, newComplaint).then(res => {
            setComplaint(initialComplaintForm);
            setMessage({message: "Complaint sent. Now go away and bother someone else."});
        }).catch(err => {
            setMessage({
                message: err.response.data.message
            });
        });
    }
    return (
        <>
            <div className='message'>
                <h2>{message.message}</h2>
            </div>
            <div className='complaint-container'>
                <form onSubmit={onSubmit}>
                    <div className='header'>
                        <h3>Complaints? Put them here!</h3>
                    </div>
                    <div className='form-group'>
                        <label>Name: </label>
                        <input type='text' name='name' id='name-input' value={complaint.name} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label>Email: </label>
                        <input type='email' name='email' id='email-input' value={complaint.email} onChange={handleChange} />
                    </div>
                    <div className='complaint-field'>
                        <p>Concern: </p>
                        <textarea type='text' name='complaint' id='complaint-input' value={complaint.complaint} onChange={handleChange} />
                    </div>
                    <div className='submit-button'>
                        <input type='submit' id='submit-button' />
                    </div>
                </form>
            </div>
        </>
        
    )
}

export default Complaint;