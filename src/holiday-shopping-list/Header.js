import React from 'react'

const headerStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'red',
    background: 'rgba(255,100,0,.5)'
  }
}

const Header = () =>
  <div style={headerStyle.container}>
    <h3> My Holiday Shopping List </h3>
    <p> Keep Track of your gifts! </p>
  </div>

export default Header
