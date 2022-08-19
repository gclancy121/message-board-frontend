import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

import axios from 'axios';

const LoginForm = () => {
   return (
    <div className="login">
        <form>
            <div className="header">
                <h3>Login</h3>
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type='text'/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type='password' />
            </div>
            <div className = "submit">
                <button>Submit</button>
            </div>

        </form>

    </div>
   )
}

export default LoginForm;