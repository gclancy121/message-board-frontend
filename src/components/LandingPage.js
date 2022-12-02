import React from 'react';
import {Link} from 'react-router-dom';

import '../css/LandingPage.css'
//add the ability to add users as friends?
//add password reset function
//add account deletion
function LandingPage () {
    return (
    <div id="landing-container">
        <div className="welcome-text">
            <h2>Welcome to Weeb Central!</h2>
            <p>This is a message board, designed to let anime fans and weebs talk to each other. 
                It can be about your favorite anime, your favorite anime girl/boy, or really anything.
            </p>
        </div>
        <div className='login-info'>
            <h3>Returning member? Click on Sachi to login!</h3>
            <h3>New member? Click Holo to register!</h3> 
            <h3>Have a complaint? Click on Asuna to file one!</h3>
        </div>
        <div className='images'>
            <Link to='/login'><img className='landing-picture' src="https://pm1.narvii.com/6338/fdb283095a57ba85f53c7b54563adf7085ad94f8_hq.jpg" alt="sachi komine"/></Link>
            <Link to='/register'><img className='landing-picture' src="http://images6.fanpop.com/image/photos/33300000/Holo-333333333-spice-and-wolf-33338229-554-463.png" alt="holo the wise wolf"/></Link>
            <Link to='/complaints'><img className='landing-picture' src="https://i.pinimg.com/736x/87/0c/ac/870cac7aecec860a908d6663dfa3e56f.jpg" alt="yuuki asuna"/></Link>
        </div>
        <div className='site-info'>
            <h2>So what kinds of things can you expect to do on this website?</h2>
                <p>This website was designed to be a general message board. While you're here, you can talk about anything anime related - your favorite shows, your least favorite shows, or even vtubers, if you're into those as well.
                For now, this is an extremely boring landing page, because I haven't really decided on all of the functionalities yet. So far, you can view a list of waifus, and add one to the database. You have to log in to do that, and you also 
                can edit the information in your profile, such as your account name and your About Me section. You can even have a favorite waifu! Along with that, you can add waifus, look at all of them, create posts about waifus, and view all posts. This place isn't even close to done yet, so make sure to check the changelog below for more updates
                on what I'm doing and what you can expect in the future.
                </p>
        </div>
        <div className="changelog-title">
        <h2>Changelog:</h2>
            <h3>I'm unsure if websites really do this, but for now I'll do this as a way for myself to help keep track of what changes have been made. </h3>
            <h4>Most recent changes:</h4>
        </div>
        <div className='changelog'>
            <p>Version: Pre-Alpha</p>
            Date: 12/2/2022
            <ul>
                <li>Showed the website to a recruiter for a company, they gave me some ideas to work on</li>
                <li>Going to start implementing password reset</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 11/16/2022
            <ul>
                <li>Continue security improvements from the other day and get the post count working</li>
                <li>Post count now updates based on number of posts you have</li>
                <li>Added a random button to post list and the "click here to view your post" button now takes you to that post directly instead to the list of all posts</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 11/14/2022
            <ul>
                <li>Began looking in to ways to improve site security, current model has a major flaw</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 11/3/2022
            <ul>
                <li>Updating CSS, got a job fair tomorrow and I might have to actually show people this site</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/27/2022
            <ul>
                <li>CSS for the added parts</li>
                <li>Tinkering around with adding comments</li>
                <li>Added skeleton for adding comments</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/23/2022
            <ul>
                <li>Time to continue the message board functionality</li>
                <li>Added the database functions</li>
                <li>Added post viewing</li>
                <li>Added individual post info</li>
                <li>Added ability to add posts, next week is deletion of all kinds</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/21/2022
            <ul>
                <li>Let's see what I'm gonna work on today</li>
                <li>Local image uploading is impossible. I'll worry about that later.</li>
                <li>I guess for now I'll work on adding the message board functionality of the message board website I built - only took me like a month to get around to it.</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/20/2022
            <ul>
                <li>I'm gonna mess with the picture upload section of Account Settings and see if I can get it to work.</li>
                <li>Not quite yet but im still gonna keep working on it</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/19/2022
            <ul>
                <li>Well Shit i gotta get back into the swing of things</li>
                <li>Did some CSS today</li>
                <li>I'm going to update the authentication so it's actually secure</li>
                <li>Okay, JWT auth actually works now - got sidetracked on redoing the auth system and almost broke my brain</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/9/2022
            <ul>
                <li>Added more CSS</li>
                <li>Going to add more waifus to the list as well</li>
                <li>Added a waifu update function</li>
                <li>even more css</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/8/2022
            <ul>
                <li>Hmm today I will add a search functionality to waifus</li>
                <li>Proper search functionality added, don't have to type the entire name now to get a result</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/7/2022
            <ul>
                <li>Added a waifu adding form and styled it</li>
                <li>Rewriting waifu database and how information from it is displayed</li>
                <li>Redid the display additional waifu info section</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/6/2022
            <ul>
                <li>Okay back in the saddle, busy Friday + Monday off</li>
                <li>Let me look over what needs to be done</li>
                <li>Probably the CSS again, but just adjusting margins on the Account Settings page</li>
                <li>I have to take a break from CSS after that, it killed my motivation last week</li>
                <li>Account Settings looks a bit better</li>
                <li>Added concerns page</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 9/1/2022
            <ul>
               <li>Oh yippee time for more CSS haha please kill me</li> 
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 8/31/22
            <ul>
                <li>Oh boy time to begin the CSS portion, wish me luck because I suck at it</li>
                <li>Updated the landing page CSS updated so it doesn't suck as hard</li>
                <li>Login and register CSS updated so it doesn't suck as hard</li>
                <li>Added a cancel button to Account Settings so you can leave without updating</li>
            </ul>
            <p>Version: Pre-Alpha</p>
            Date: 8/30/22
            <ul>
                <li>Got the waifu section sorta working</li>
                <li>Yeah not doing CSS today since a friend wants to see the site in all it's jank glory</li>
                <li>Gotta implement a search feature for the waifu section, this can get very out of hand very very quickly</li>
                <li>Added a link between the login and register pages for quicker access, can't believe I didn't add that at first</li>
                <li>Organized files a bit, was getting a bit too unorganized</li>
                <li>Added & reorganized endpoints in API, now they don't suck </li>
                <li>You can now update your profile in the account settings page. Picture update setup is <strong>not</strong> permanent. </li>
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