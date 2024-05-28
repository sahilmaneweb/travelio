import React from 'react'
import Hero from './component/Hero/Hero'
import Title from './component/Title/Title'
import About from './component/About/About'
import Products from './component/Products/Products'
import Feature from './component/Feature/Feature'
import Testimonial from './component/Testimonial/Testimonial'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
      <Title title='See Some Benefits of Joining Us' subtitle='Special Features' />
      <About />
      <Title title='Explore to Destination' subtitle='Explore' />
      <Products />
      <Feature />
      <Title title='What Our Travelers say... ' subtitle=''/>
      <Testimonial />
      <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App