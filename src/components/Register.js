import React, {useState} from "react";
import axios from 'axios';
import URL from '../url';

const RegisterForm = () => {
    const initialRegisterForm = {
        username: '',
        password: ''
    }
    const [register, setRegister] = useState(initialRegisterForm);

    const handleChange = evt => {
        setRegister({
            ...register,
            [evt.target.name]: evt.target.value
        });
    }
    const onSubmit = evt => {
        evt.preventDefault();
        const newUser = {
            username: register.username,
            password: register.password
        }
        // axios.post(`${URL}/register`, newUser).then(res => {
        //     console.log(res);
        // })
    }
    return (
        <div className="register">
            <form onSubmit={onSubmit}>
                <div className='header'>
                    <h3>Register</h3>
                </div>
                <div className="form=group">
                    <label>Username </label>
                    <input type='text' name='username' value={register.username} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password </label>
                    <input type='password' name='password' value={register.password} onChange={handleChange} />
                </div>
                <div className="submit">
                    <input type='submit' />
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;