import React, { useContext, useState } from 'react';
import "./Register.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const {createUser} = useContext(AuthContext)


 const handleRegister = (event)=>{
    setSuccess("")
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    if(password<6){
        setError("passowrd length should be at least 6")
        return;
    }

    createUser(email, password)
    .then(result=>{
        const loggedUser = result.user;
        setSuccess("user has been created successfully")
        form.reset()
    })
    .catch(error=>{
        setError(error.message)
    })

 }

    return (
        <div>
            <h1>Register</h1>
            <form className='p-4' onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name'/><br></br>
                <input type="email" name="email" id="email" placeholder='Your Email' required/><br></br>
                <input type="password" name="password" id="password" placeholder='password' required/><br></br>
                <input type="text" name="photo" id="photo" placeholder='Photo Url' /><br></br>
                <input type="submit" value="Register" className='btn btn-primary' />
            </form>
            <p>{success}</p>
            <p>{error}</p>
            <p className='text-bold'>You are alreay user? <Link to={"/login"}>Login</Link></p>
        </div>
    );
};

export default Register;