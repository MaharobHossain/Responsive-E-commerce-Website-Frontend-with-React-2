import React from 'react'
import './NewsLetter.css'



const NewsLetter = () => {
  return (
    <div className='newsletter clearfix'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p> <span> SUBSCRIBE </span>to our newsletter and stay Updated.</p>
      <div>
        <input type="email" placeholder='Your Email ID' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter;
