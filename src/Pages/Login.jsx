import React, { useRef }from 'react';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';
const Login = () => {

    const form = useRef(null);

    const handleSubmit = () =>{
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />

                <form action="/" className="form" ref={form}>
                    <label for="email" className="label">Email Address</label>
                    <input type="text" name="email" placeholder="fredy@example.com" className="input input-password" />
                    <label for="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />
                    <button 
                        onClick={handleSubmit}
                        
                        className="primary-button login-button">Log in</button>
                    <a href="/">Forgot my password</a>
                </form>
                <button 
                    className="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    );
}

export default Login;