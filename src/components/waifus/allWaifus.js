import React, {useState, useEffect} from "react";
import axios from "axios";
import URL from '../../utils/url';

import Waifu from "./waifu";


const AllWaifus = () => {
    const [waifus, setWaifus] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/waifus`).then(res => {
            setWaifus(res.data);
        })
        }, [])

    return (
        <div className="waifu-list">
            <input type="search" placeholder="Search for a specific waifu" />
            {waifus.map(waifu => <Waifu waifu={waifu} key={waifu.waifu_id}/>)}
        </div>
    )
}

export default AllWaifus