import React from 'react'
import './About.css'
import banner from '../../assets/img2.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
        <div className="dl">
            <span>01</span>
            <h2>Get Best Deals</h2>
            <hr />
            <p>Find help with your booking and travel plans and see what to espect along your journey today with us.</p>
        </div>
        <div className="dl">
            <span>02</span>
            <h2>100% Time Transparency</h2>
            <hr />
            <p>Find help with your booking and travel plans and see what to espect along your journey today with us.</p>
        </div>
        <div className="dl">
            <span>03</span>
            <h2>Travel with More Confidence</h2>
            <hr />
            <p>Find help with your booking and travel plans and see what to espect along your journey today with us.</p>
        </div>
        </div>
        <div className="about-right">
        <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default About