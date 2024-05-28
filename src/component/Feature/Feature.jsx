import React from 'react'
import './Feature.css'
import ab from '../../assets/about.jpg'
import Title from '../Title/Title'

const Feature = () => {
  return (
    <div className='feature'>
        <div className="left-col">
            <img src={ab} alt="" />
        </div>
        <div className="right-col">
            <Title title='Sweet Memories Come to Life Again' subtitle='Memories' />
            <hr />
            <p>
                 would you explore nature paradise in the world. Let's find the best destination in world with us. Would you explore nature paradise in the world. Let's find the best destination in world with us.
            </p>
            <div className="blanks">
                <div className="sec">
                      <h2>10</h2>
                        <p>Years Experience</p>
                </div>
                <div className="sec">
                <h2>300</h2>
                        <p>Destination Collaboration</p>
                </div>
                <div className="sec">
                <h2>20K</h2>
                        <p>Happy Customer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature