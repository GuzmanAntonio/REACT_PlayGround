import React from 'react'
import Title from './Title'
import DueDate from './DueDate'
import Status from './Status'

const App = () =>
  <div>
    <h1> To Do List App</h1>
    <div>
      <Title />
      <DueDate />
      <Status />
    </div>
  </div>
export default App  