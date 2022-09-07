import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Waifu = (props) => {
    const {waifu} = props;
    const navigate = useNavigate();
    
    function showInfo () {
        localStorage.setItem('id', waifu.waifu_id)
        navigate(`/waifus/id=${waifu.waifu_id}`);
    }

    return (
        <div className="waifu">
            {waifu.waifu_name} 
            <button onClick={showInfo}> Click here to load more info</button>
        </div>
    )
}

export default Waifu;