import React, { useContext, useRef } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { Context} from '../../context/Context'
import axios from 'axios';
export default function Login() {
  const userRef=useRef();
  const passwordRef=useRef();
  const {user,dispatch,isFetching}=useContext(Context);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
      window.location.replace("/");
    }catch(error)
    {
      dispatch({type:"LOGIN_FAILURE"});
    }

  }

  console.log(isFetching);
  return (
    <div className='login'>
      <div className="login-container">

        <span className="loginTitle">Login</span>
        <form  className="loginForm" onSubmit={handleSubmit}>
            <label >Username</label>
            <input type="text" className='loginInput' placeholder='Enter your username...' 
            ref={userRef}
            />

            <label >Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...'
            ref={passwordRef}
            />
            
           <button className="loginButton" disabled={isFetching} type="submit">Login</button>
            
        </form>
        <button className="loginRegisterButton" >
          <Link className='link' to='/register'>Register</Link>
        </button>
            </div>
    </div>
  )
}
