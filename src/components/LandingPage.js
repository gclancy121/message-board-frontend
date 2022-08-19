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

        <div>
            <p>As you can see, this entire site is a bit of a work in progress. I'm not done with it yet - not even close - but I wanted to test myself and see how much of this place I could build on my own.</p>
            <p>So, what there is to look at and see, please enjoy!</p>
        </div>
    </>
    )
}

export default LandingPage;