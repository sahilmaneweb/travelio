import React from 'react'
import './Hero.css'
import video from '../../assets/hero.mp4'
import ReactPlayer from 'react-player'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="banner">
            <h1>Discover A Beautiful <br /> Place With Us</h1>
            <p>Would you explore nature paradise in the world, <br /> Let's find the best destination in the world.</p>
        </div>
        {/* <div className="player">
          <ReactPlayer url={video} playing={true} loop={true} muted={true} width="100%" height="100%" />
        </div> */}
        <video autoPlay loop muted id="player">
          <source src={video} type='video/mp4' />
        </video>
        {/* <video src={video} ></video> */}
    </div>
  )
}

export default Hero