import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
    const [user, setUser] = useState()
    const {login} = useContext(AuthContext)

    const handleLogin = (event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const passowrd = form.password.value
        console.log(email, passowrd)
        login(email, passowrd)
        .then(result=>{
            const loggedUser = result.user
            setUser(loggedUser)
            console.log(user)
        })
    }


    return (
        <div>
             <form onSubmit={handleLogin} className='p-4'> 
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