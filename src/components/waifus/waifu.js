import React, {useState} from "react";

const Waifu = (props) => {
    const {waifu} = props;
    const [isHidden, setIsHidden] = useState(true);
    
    function showInfo () {
        setIsHidden(!isHidden);
    }

    return (
        <div className="waifu">
            {waifu.waifu_name} 
            <button onClick={showInfo}>Click here to load more info</button>
            <div className="hidden-info" >
                {!isHidden && <p>{waifu.waifu_description}</p>}
            </div>
            
        </div>
    )
}

export default Waifu;