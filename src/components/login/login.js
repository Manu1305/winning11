import React from 'react'
import './login.css'
import image from '../Header/BALL.jpg'
import Loginbox from './login-box'
import Rightpic from './Rightpic'
import { Button } from 'react-bootstrap';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate()
    const [username, usernameChange] = useState('')
    const [password, setPassword] = useState('')
    const handlesubmit = (event) => {
        event.preventDefault()
        console.log(`username:${username} password:${password}`);
        navigate    ('/home')
    }
    return (
        <div>
            <div className='left-div'>
                <div className='welcome'>
                    <h2>
                        Welcome to
                    </h2>
                </div>
                <div className='sub-head'>
                    {/* <img id='ball_image' src={image} alt="" /> */}
                    <h1> PERFECT 11 </h1>
                </div>
                <div className='login-div'>
                    <div>
                        <form onSubmit={handlesubmit}>
                            <div className='inputBox'>
                                <input className='user_id' type="text" required="required" value={username} onChange={(event) => { usernameChange(event.target.value) }} />
                                <span>User name</span>

                            </div>
                            <div className='inputBoxpass'>
                                <input className='user_id' type="password" required="required" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                                <span>Password</span>

                            </div>
                            <button className='button-5' type='submit'>Explore</button>
                        </form>
                        <h3 className='otp_login'>Otp login </h3>

                        <button className='button-43' role="button">OTP</button>


                        <h5 className='signup-text'>Dont have account just <button class="button-23" role="button">Click here</button></h5>

                    </div>
                </div>


            </div>
            <div>
                <Rightpic />
            </div>
        </div>
    )
}

export default Login
