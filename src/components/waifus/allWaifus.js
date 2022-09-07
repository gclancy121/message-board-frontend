import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import URL from '../../utils/url';

import Waifu from "./waifu";


const AllWaifus = () => {
    const [waifus, setWaifus] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/waifus`).then(res => {
            setWaifus(res.data);
        })
        }, [])

    function nav() {
        navigate('/waifus/add-waifu');
    }
    return (
        <div className="waifu-list">
            {/* <input type="search" placeholder="Search for a specific waifu" /> */}
            <button onClick={nav}>Add A Waifu</button>
            {waifus.map(waifu => <Waifu waifu={waifu} key={waifu.waifu_id}/>)}
        </div>
    )
}

export default AllWaifus