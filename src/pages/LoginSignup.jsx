import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom';






const LoginSignup = () => {
  return (
    <div>  
   
    <div className='loginsingup clearfix'>
      <div className="login-container">
        <h1>Sing Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>

        <p className="login-login">
          Already havean account? <Link to='/login' ><span>Login here</span></Link>
        </p>

        <div className="login-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, I agree to the terms of use & privacy policy.</p> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default LoginSignup;

