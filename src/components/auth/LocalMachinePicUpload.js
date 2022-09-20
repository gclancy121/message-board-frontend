import React, {useState, useEffect} from 'react';
import axios from 'axios';
import URL from '../../utils/url';

function LocalMachineUpload() {
    const [file, setFile] = useState();
    const [id, setId] = useState(0);
    function handleChange(evt) {
        setFile(evt.target.files[0]);
    }
    useEffect(() => {
        const id = localStorage.getItem('id');
        setId(id);
        localStorage.removeItem(id);
        console.log(id);
    }, [])
    function handleSubmit(evt) {
        evt.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('filename', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.put(`${URL}/users/${id}`, formData, config).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err.response.data.message);
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Choose Profile Pic from Computer</label>
            <input type='file' onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
        
    )
}

export default LocalMachineUpload;