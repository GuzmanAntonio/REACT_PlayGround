import React, {Component} from 'react'
import ToDoForm from './ToDoForm'

class ToDoListContainer extends Component {
  state = {
    toDos: undefined,
    title: undefined,
    dueDates: undefined
  }

  render () {
    return (
      <div>
        <h3> Hi </h3>
        <ToDoForm />
      </div>
    )
  }
}

export default ToDoListContainer