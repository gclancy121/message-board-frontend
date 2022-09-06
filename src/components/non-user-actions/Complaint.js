import React, {useState} from "react";

function Complaint() {
    const initialComplaintForm = {
        name: '',
        email: '',
        complaint: ''
    }
    const [complaint, setComplaint] = useState(initialComplaintForm);

    const handleChange = evt => {
        setComplaint({
            ...complaint,
            [evt.target.name]: evt.target.value
        });
    }
    return (
        <div className='complaint-container'>
            <form className='form'>
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
                <div classname='complaint-field'>
                    <label>Concern: </label>
                    <input type='text' name='concern' id='concern-input' value={complaint.complaint} onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}

export default Complaint;