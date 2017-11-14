import React, {Component} from 'react'
import ToDoForm from ',/ToDoForm'
import ToDoList from './ToDoList'
import DATA from './DATA'

class ToDoListContainer extends Component {
  state = {
    title: undefined,
    dueDate: undefined,
    status: undefined,
  }
  componentDidMount () {
    const tasks = DATA
    this.setState({title: DATA.title, dueDate: DATA.dueDate, status: DATA.status})
  }
  handleTaskChange = (e) => {
    this.setState({nameOfTask: e.target.value})
  }
  handleTaskStatusChange = (e) {
    this.setState({taskStatus: e.target.value})
  }
  handleTaskDueDateChange = (e) {
    this.setState({taskeDueDate: e.target.value})
  }

  ender () {
    return (
      <div>
        <h3> Hi </h3>
        <ToDoForm 
          handleTaskChange={this.handleTaskChange}
          handleTaskStatusChange={this.handleTaskStatusChange}
          handleTaskDueDateChange={this.handleTaskStatusChange}
        />
      </div>
    )
  }
}

export default ToDoListContainer