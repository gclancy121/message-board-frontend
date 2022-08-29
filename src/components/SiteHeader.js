import React, {useState} from "react";
import { Link } from "react-router-dom";

import "../css/SiteHeader.css";

const SiteHeader = () => {
    const state = localStorage.getItem('authorization');

    function forceUpdate() {
       setCount(count + 1);
    }
    const [count, setCount] = useState(0);

    return (<div className = "site-header">
        <div className="row">
            <h2 className="header-text">Welcome to Weeb Central! Your message board for weebs to talk about weeb stuff.</h2>
        </div>

        <div className='row'>
            <Link to='/' onClick={forceUpdate} className='button'>Home</Link>
            <Link to='/profile' onClick={forceUpdate} className='button'>Profile</Link>
            <Link to='/waifus' onClick={forceUpdate} className="button">Waifus</Link>
        </div>
    </div>)
}
export default SiteHeader;