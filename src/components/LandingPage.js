import React from 'react';
import {Link} from 'react-router-dom';

import '../css/LandingPage.css'

function LandingPage () {
    return (
    <div id="landing-container">
        <div className="welcome-text">
            <h3>Welcome to Weeb Central!</h3>
            <p>This is a message board, designed to let anime fans and weebs talk to each other. 
                It can be about your favorite anime, your favorite anime girl/boy, or really anything.
            </p>
        </div>
        <div className='login-info'>
            <h3>Returning member? Click on Sachi to login!</h3>
            <h3>New member? Click Holo to register!</h3> 
            <h3>Have a concern? Click on Asuna to file one!</h3>
        </div>
        <div className='images'>
            <Link to='/login'><img id="sachi" src="https://pm1.narvii.com/6338/fdb283095a57ba85f53c7b54563adf7085ad94f8_hq.jpg" alt="sachi komine"/></Link>
            <Link to='/register'><img id="holo" src="http://images6.fanpop.com/image/photos/33300000/Holo-333333333-spice-and-wolf-33338229-554-463.png" alt="holo the wise wolf"/></Link>
            <Link to='/concerns'><img id="asuna" src="https://i.pinimg.com/736x/87/0c/ac/870cac7aecec860a908d6663dfa3e56f.jpg" alt="yuuki asuna"/></Link>
        </div>
        <div className='site-info'>
            <h2>So what kinds of things can you expect to do on this website?</h2>
            <p>This website was designed to be a general message board. While you're here, you can talk about anything anime related - your favorite shows, your least favorite shows, </p>
        </div>
        <p className='copyright'>All images are not my own and are found courtesy of Google.</p>
    </div>
    )
}

export default LandingPage;