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
                <p>This website was designed to be a general message board. While you're here, you can talk about anything anime related - your favorite shows, your least favorite shows, or even vtubers, if you're in to those as well.
                For now, this is an extremely boring landing page, because I haven't really decided on all of the functionalities yet. I know there will be a message board element, and there will also be an element that allows you to add waifus to the databse.
                For now, enjoy what little there really is to do in this admittedly bare-bones app - Don't worry, I'm working on it! Check the changelog for more info.
                </p>
        </div>
        <div className="changelog">
        <h2>Changelog:</h2>
            <h3>I'm unsure if websites really do this, but for now I'll do this as a way for myself to help keep track of what changes have been made. </h3>
            <h4>Most recent changes:</h4>
            <p>Version: Pre-Alpha</p>
            Date: 8/30/30
            <ul>
                <li>Got the waifu section sorta working</li>
                <li>Yeah not doing CSS today since a friend wants to see the site in all it's jank glory</li>
                <li>Gotta implement a search feature for the waifu section, this can get very out of hand very very quickly</li>
                <li>Added a link between the login and register pages for quicker access, can't believe I didn't add that at first</li>
                <li>Organized files a bit, was getting a bit too unorganized</li>
                <li>Added account deletion & other endpoints to API </li>
                <li>Working on getting a settings page up with working account deletion</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 8/29/30
            <ul>
                <li>Added login functionality</li>
                <li>Changed the auth to actually work as intended</li> 
                <li>Added waifu section, doesn't currently go anywhere but that will change</li>
                <li>Considered updating the CSS, I'll dedicate tomorrow to messing around in CSS because it's a pain</li>
                <li>Began work on the waifu section</li>
            </ul>
        </div>
        <p className='copyright'>All images are not my own and are found courtesy of Google.</p>
    </div>
    )
}

export default LandingPage;