import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/services'>Services</Link>
      <Link to='/products'>Products</Link>
    </nav>
  )
}

export default NavigationBar
