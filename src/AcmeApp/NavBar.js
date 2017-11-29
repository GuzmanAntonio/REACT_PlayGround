import React from 'react'
import Link from './Link'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    marginLeft: '2%',
    marginRight: '2%',
    paddingTop: '2%',
    paddingBottom: '2%',
    backgroundColor: 'white',
    border: '3px solid #e3e0cf'
  }
}

const NavBar = () => {
  return (
    <nav style={styles.container}>
      <Link icon={'home'} name={'HOME'} />
      <Link icon={'grav'} name={'ABOUT'} />
      <Link icon={'money'} name={'SHOP'} />
      <Link icon={'user-circle'} name={'CUSTOMERS'} />
      <Link icon={'envelope-square'} name={'CONTACT'} />
    </nav>
  )
}

export default NavBar