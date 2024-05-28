import React from 'react'
import './Products.css'
import place1 from '../../assets/place-1.jpg'
import place2 from '../../assets/place-2.jpg'
import place3 from '../../assets/place-3.png'
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Products = () => {
  return (
    <div className='products'>
        <div className="card">
            <span className="rate"><FaStar className='star' /> 4.9</span>
            <div className="poster">
                <img src={place1} alt="" />
            </div>
            <div className="description">
                <h2>Lago Di Braises</h2>
                <p><IoLocationSharp className='locate' /> Braises, Italy</p>
                <div className="price">
                    <h2>$245</h2>
                    <span>/per person</span>
                </div>
                <button>Book Now</button>
            </div>
        </div>
        <div className="card">
            <span className="rate"><FaStar className='star' />4.9</span>
            <div className="poster">
                <img src={place3} alt="" />
            </div>
            <div className="description">
                <h2>Glenfinnan Viaduct</h2>
                <p><IoLocationSharp className='locate' /> United Kingdom</p>
                <div className="price">
                    <h2>$350</h2>
                    <span>/per person</span>
                </div>
                <button>Book Now</button>
            </div>
        </div>
        <div className="card">
            <span className="rate"><FaStar className='star' />4.9</span>
            <div className="poster">
                <img src={place2} alt="" />
            </div>
            <div className="description">
                <h2>United Arab Emirates</h2>
                <p><IoLocationSharp className='locate' /> Dubai</p>
                <div className="price">
                    <h2>$245</h2>
                    <span>/per person</span>
                </div>
                <button>Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default Products