import React, {useState, useEffect} from "react";
import axios from "axios";
import URL from "../../utils/url";

import {useNavigate} from 'react-router-dom';

function UpdateWaifu() {
    const initialWaifuForm = {
        waifu_name: '',
        waifu_description: '',
        waifu_birth_month: '',
        waifu_birth_day: '',
        waifu_picture: ''
    }
    const [waifu, setWaifu] = useState(initialWaifuForm);
    const [message, setMessage] = useState('');
    const id = localStorage.getItem('id');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/waifus/id/${id}`).then(res => {
            setWaifu(res.data);
        })
    }, [])

    const handleChange = evt => {
        setWaifu({
            ...waifu,
            [evt.target.name]: evt.target.value
        });
    };
    const onSubmit = evt => {
        evt.preventDefault();
        const updatedWaifu = {
            waifu_name: waifu.waifu_name,
            waifu_description: waifu.waifu_description,
            waifu_birth_month: waifu.waifu_birth_month,
            waifu_birth_day: waifu.waifu_birth_day,
            waifu_picture: waifu.waifu_picture,
        }
        axios.put(`${URL}/waifus/id/${id}`, updatedWaifu).then(res => {
            navigate(`/waifus/id=${id}`);
        }).catch(err => {
            setMessage({
                message: err.response.data.message
            })
        })
    }
    return (
        <>
        <div className='message'>
            <h2>{message.message}</h2>
        </div>
       <div className='add-container'>
        <form onSubmit={onSubmit}>
            <div className='header'>
                <h3>Update Waifu</h3>
            </div>
            <div className='form-group'>
                <label>Waifu Name: </label>
                <input type='text' name='waifu_name' id='waifu-name-input' value={waifu.waifu_name} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label>Waifu Birthday (if you don't know, leave it blank)</label>
                <select value={waifu.waifu_birth_month} name='waifu_birth_month' id='months' onChange={handleChange}>
                    <option value=''>I don't know/none</option>
                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                </select>
                <select value={waifu.waifu_birth_day} onChange={handleChange} name='waifu_birth_day' id='day'>
                    <option value=''>I don't know/none</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                    <option value='31'>31</option>
                </select>
            </div>
            <div className='form-group'>
                <label>Picture: 
                (Must be a direct image link)</label>
                <input type='text' id='waifu-pic' name='waifu_picture' value={waifu.waifu_picture} onChange={handleChange} />
            </div>
            <div className='description-field'>
                <p>Description: </p>
                <textarea type='text' name='waifu_description' id='waifu-description-input' value={waifu.waifu_description} onChange={handleChange} />
            </div>
            
            <div className='submit-button'>
                <input type='submit' id='submit-button' />
            </div>
        </form>
       </div>
       </>
    )
}

export default UpdateWaifu;