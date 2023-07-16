import React from 'react'
import "./login.scss"
import { useState } from 'react'
import { login } from '../../authContext/apiCalls';
import { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {dispatch} = useContext(AuthContext);
  // const navigate = useNavigate;
  // const handleClick = () => {
  //   navigate("/register");
  // }
  const handleLogin = (e) => {
    e.preventDefault();
    login({email,password}, dispatch);
  }
  return (
    <div className='login'>
        <div className='top'>
            <div className='wrapper'>
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
            </div>
        </div>
        <div className='container'>
           <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email or phone number' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button className='loginButton' onClick={handleLogin}>Sign In</button>
                <span>New to Netflix? <NavLink to= "/register"><b>Sign up now.</b></NavLink></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a
                    bot. <b>Learn more</b>.
                </small>
           </form>
            
        </div>
    </div>
  )
}
