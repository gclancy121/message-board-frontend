import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from '../../utils/url';

import Waifu from "./waifu";

import '../../css/waifus/allWaifus.css';
const AllWaifus = () => {
    const [waifus, setWaifus] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/waifus`).then(res => {
            setWaifus(res.data);
        })
        }, [])

    function navAdd() {
        navigate('/waifus/add-waifu');
    }
    function navSearch() {
        navigate('/waifus/search-waifu');
    }
    return (
        <>
            <div className='waifu-buttons'>
                    <button onClick={navSearch}>Search for a Waifu</button>
                    <button onClick={navAdd}>Add A Waifu</button>
                </div>
            <div className="waifu-list">
                {waifus.map(waifu => <Waifu waifu={waifu} key={waifu.waifu_id}/>)}
            </div>
        </>
        
    )
}

export default AllWaifus;