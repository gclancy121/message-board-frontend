import React from "react";
import { Link } from "react-router-dom";

import "../css/SiteHeader.css";

const SiteHeader = () => {
    return (<div className = "site-header">
        <div className="row">
            <h2 className="header-text">Welcome to Weeb Central! Your message board for weebs to talk about weeb stuff.</h2>
        </div>

        <div className='row'>
            <Link to='/' className='button'>Home</Link>
        </div>
    </div>)
}
export default SiteHeader;