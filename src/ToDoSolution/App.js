import React from 'react'
import Header from './Header'
import ToDoContainer from './ToDoContainer'

const styles = {
  container: {
    heigth: '100vw',
    width: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const App = () =>
  <div style = {styles.container}>
    <Header />
    <ToDoContainer />
  </div>

export default App