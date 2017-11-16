import React from 'react'

const styles = {
  jumbotron: {
    backgroundColor: '#34495e',
    color: 'white',
    width: '50%',
    border: 'solid 3px #c0392b',
    padding: '20',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const Header = () =>
  <div style={styles.jumbotron}>
    <h1> To Do List App </h1>
  </div>

export default Header