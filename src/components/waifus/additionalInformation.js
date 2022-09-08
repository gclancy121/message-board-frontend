import React, {useState, useEffect} from "react";
import axios from "axios";
import URL from "../../utils/url";
import { useNavigate } from "react-router-dom";

import '../../css/waifus/additionalInformation.css'
function AdditionalInfo() {
    const [waifu, setWaifu] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const id = localStorage.getItem('id');
        if (id == null) {
            navigate('/waifus')
        }
        axios.get(`${URL}/waifus/id/${id}`).then(res => {
            setWaifu(res.data);
        });
    }, [])
    function returnToList() {
        navigate('/waifus');
    }
    return (
        <div className='addtl-info-container'>
            <img id='addtl-info-pic' src={waifu.waifu_picture}/>
            <h3>{waifu.waifu_name}</h3>
            <p>Birthday: {waifu.waifu_birth_month} {waifu.waifu_birth_day}</p>
            <p>{waifu.waifu_description}</p>
            <button onClick={returnToList}>Return</button>
        </div>
    )
}

export default AdditionalInfo;