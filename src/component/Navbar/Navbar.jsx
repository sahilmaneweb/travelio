import React, { useState } from 'react'
import './Navbar.css'
import main from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
    const toggleMenu = () => {
          mobile ? setMobile(false):setMobile(true);
    }
  return (
    <div className={`navbar ${mobile ? 'max':''}`}>
        <div className="logo">Travelio</div>
        <ul>
            <li><Link onClick={toggleMenu} to='about' smooth={true} offset={-190} duration={500}>Features</Link></li>
            <li><Link onClick={toggleMenu} to='products' smooth={true} offset={-190} duration={500}>Places</Link> </li>
            <li><Link onClick={toggleMenu} to='feature' smooth={true} offset={-80} duration={500}>About Us</Link></li>
            <li><Link onClick={toggleMenu} to='testimonial' smooth={true} offset={-150} duration={500}>Testimonials</Link></li>
        </ul>
        <Link onClick={toggleMenu} to='contact' smooth={true} offset={0} className='sub' duration={500}>Subscribe</Link>
        <img src={main}  className='main' alt="" onClick={toggleMenu} />
    </div>
  )
}

export default Navbar