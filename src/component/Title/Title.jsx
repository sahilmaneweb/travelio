import React from 'react'
import './Title.css'
const Title = ({title, subtitle}) => {
  return (
    <div className='title'>
        <p className='subtitle'>{subtitle} </p>
        <h1 className='headline'>{title}</h1>
    </div>
  )
}

export default Title