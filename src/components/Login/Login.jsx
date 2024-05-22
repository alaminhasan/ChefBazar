import React from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
             <form className='p-4'> 
                <input type="email" name="email" id="email" placeholder='Your Email' required/><br></br>
                <input type="password" name="password" id="password" placeholder='password' required/><br></br>
                <input type="submit" value="Login" className='btn btn-primary' />
            </form>
            <button className='btn btn-secondary'>Google Login</button>
            <button className='btn btn-success'>Github Login</button>
            <p className='text-bold'>You are not user? <Link to={"/register"}>Register</Link></p>
        </div>
    );
};

export default Login;