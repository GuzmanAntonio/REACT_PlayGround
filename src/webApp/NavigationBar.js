import React from 'react'
import Link from './Link'

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <Link icon={'home'} name={'HOME'} />
      <Link icon={'question-circle-o'} name={'ABOUT'} />
      <Link icon={'product-hunt'} name={'PRODUCTS'} />
      <Link icon={'send-o'} name={'CONTACT'} />
    </nav>
  )
}

export default NavigationBar
