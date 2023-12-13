import React, { useState } from 'react'
import "./Register.css"
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Register() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);
  const handleSubmit= async(e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res= await axios.post("/auth/register",{
        username,email,password
      })
      res.data && window.location.replace("/login")
    }catch(error)
    {
      setError(true);
    }

    }
  return (
    <div className='Register'>
      <div className='register-container'>
        <span className="RegisterTitle">Register</span>
        <form  className="RegisterForm" onSubmit={handleSubmit}>
          <label >Username</label>
            <input onChange={e=>setUsername(e.target.value)}  type="text" className='RegisterInput' placeholder='Enter your username.....' />

            <label >Email</label>
            <input onChange={e=>setEmail(e.target.value)}  type="text" className='RegisterInput' placeholder='Enter your email.....' />

            <label >Password</label>
            <input  onChange={e=>setPassword(e.target.value)} type="password" className='RegisterInput' placeholder='Enter your password.....' />
            
           <button className="RegisterButton" type='submit'>Register</button>
            
        </form>
        <button className="LoginButton">
        <Link className='link' to='/login'>Login</Link>
        </button>
        {
          error&&
        <span>Some thing went wrong</span>
        }
        </div>
    </div>
  )
}
