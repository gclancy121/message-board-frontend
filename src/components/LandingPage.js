import React from 'react';

import '../css/LandingPage.css'

function LandingPage () {
    return (
    <>
        <div className = "welcome-text">
            <h3>Welcome to Weeb Central!</h3>
            <p>This is a message board, designed to let anime fans and weebs talk to each other. 
                It can be about your favorite anime, your favorite anime girl/boy, or really anything.
            </p>
        </div>
        {/* <img src="https://i.imgur.com/vOeXgwv.jpeg" alt="sachi komine, my favorite anime girl"/> */}
        <p className='copyright'>Photo courtesy of Imgur and Frontwing Co, Ltd.</p>
    </>
    )
}

export default LandingPage;