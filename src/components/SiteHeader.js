import React, {useState} from "react";
import { Link } from "react-router-dom";

import "../css/SiteHeader.css";

const SiteHeader = () => {
    const state = localStorage.getItem('authorization');

    function forceUpdate() {
        if (count === 1) {
            setCount(0);
        }
        if (count === 0) {
            setCount(1);
        }
    }

    function checkLoggedIn(evt) {
        forceUpdate();
        if (state == null) {
            evt.preventDefault();
            alert("You've gotta be logged in to access that, chief!")
        } 
    }
    const [count, setCount] = useState(0);

    return (<div className = "site-header">
        <div className="row">
            <h2 className="header-text">Welcome to Weeb Central! Your message board for weebs to talk about weeb stuff.</h2>
        </div>

        <div className='row'>
            <Link to='/' onClick={forceUpdate} className='button'>Home</Link>
            <Link to='/profile' onClick={checkLoggedIn} className='button'>Profile</Link>
        </div>
    </div>)
}
export default SiteHeader;