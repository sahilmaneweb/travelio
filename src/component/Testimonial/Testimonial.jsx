import React from 'react'
import './Testimonial.css'
import use1 from '../../assets/user-1.jpeg'
import use2 from '../../assets/user-2.jpeg'
import use3 from '../../assets/user-3.jpeg'
import use4 from '../../assets/user-4.jpeg'

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <ul className="slider">
            <li>
            <div className="slide">
            <div className="userinfo">
                <img src={use1} alt="" />
                <div className="user">
                    <h2>Sahil Mane</h2>
                    <p>Mumbai, India</p>
                </div>
            </div>
            <p className="post">
            Highly recommended for anyone looking for a better way to invest in their future. I am very happy with my investment and watching my money grow.
            </p>
        </div>
        </li>
            <li>
            <div className="slide">
            <div className="userinfo">
                <img src={use2} alt="" />
                <div className="user">
                    <h2>Sujal Pal</h2>
                    <p>Mumbai, India</p>
                </div>
            </div>
            <p className="post">
            Highly recommended for anyone looking for a better way to invest in their future. I am very happy with my investment and watching my money grow.
            </p>
        </div>
        </li>
            <li>
            <div className="slide">
            <div className="userinfo">
                <img src={use3} alt="" />
                <div className="user">
                    <h2>Ayush Patel</h2>
                    <p>Mumbai, India</p>
                </div>
            </div>
            <p className="post">
            Highly recommended for anyone looking for a better way to invest in their future. I am very happy with my investment and watching my money grow.
            </p>
        </div>
        </li>
            <li>
            <div className="slide">
            <div className="userinfo">
                <img src={use4} alt="" />
                <div className="user">
                    <h2>Aditya Poojary</h2>
                    <p>Mumbai, India</p>
                </div>
            </div>
            <p className="post">
            Highly recommended for anyone looking for a better way to invest in their future. I am very happy with my investment and watching my money grow.
            </p>
        </div>
        </li>
        </ul>
    </div>
  )
}

export default Testimonial