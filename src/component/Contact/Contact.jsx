import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Subscribe newsletter & <br/>get latest news</h1>
        <form>
            <input type="text" className='text' name="text" id="text" />
            <button>Subscribe</button>
        </form>
    </div>
  )
}

export default Contact