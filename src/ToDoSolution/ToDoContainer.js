import React, {Component} from 'react'
import ToDoForm from './Form'
import ToDoList from './ToDoList'

const list = {
  container: {
    display: 'flex'
  }
}

class ToDoContainer extends Component {
  state = {
    toDos: [],
    title: undefined,
    dueDate: undefined,
    completed: [],
    incomplete: []
  }

  componentDidMount () {
    const toDos = JSON.parse(localStorage.getItem('toDos')) || []
    console.log(toDos, 'Local Storage toDos')
    this.setState({toDos: toDos})
    setTimeout(() => {
      this.sortByComplete()
    }, 3000)
  }

  addToDo = (e) => {
    e.preventDefault()
    const allToDos = this.state.toDos || []
    if (this.state.title && this.state.dueDate) {
      const newToDo = {
        title: this.state.title,
        dueDate: this.state.dueDate,
        complete: false,
        id: this.state.toDos
          ? this.state.toDos.length + 1
          : 1
      }
      allToDos.push(newToDo)
      this.setState({toDos: allToDos})
      this.sortByComplete()
      localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
      alert('this item was added')
      this.setState({title: ''})
      this.setState({dueDate: ''})
    } else {
      alert('Cannot have Title or Due Date')
    }
  }

  sortByComplete = () => {
    const completed = this.state.toDos
      ? this.state.toDos.filter(item => !item.complete)
      : []
    const incomplete = this.state.toDos
      ? this.state.toDos.filter(item => item.complete)
      : []
    this.setState({completed: completed, incomplete: incomplete})
  }

  updateTitle = (e) => {
    this.setState({title: e.target.value})
  }

  updateDueDate = (e) => {
    this.setState({dueDate: e.target.value})
  }

  markComplete = (e) => {
    const theTodo = this.state.toDos.find(item => {
      return Number(e.target.id) === Number(item.id)
    })
    console.log(theTodo)
    theTodo.complete = !theTodo.complete
    this.sortByComplete()
  }

  resetToDos = () => {
    this.setState({ toDos: [], completed: [], incomplete: [] })
    localStorage.clear()
    // this.sortByComplete()
  }

  deleteToDo = (e) => {
    const theTodo = this.state.toDos.find(item => {
      return Number(e.target.id) === Number(item.id)
    })
    console.log(theTodo)
    const newArr = this.state.toDos.filter(item => {
      return item.id !== theTodo.id
    })
    console.log(newArr)
    this.setState({ toDos: newArr })
    localStorage.setItem('toDos', JSON.stringify(newArr))
    setTimeout(() => {
      this.sortByComplete()
    }, 1000)
  }

  render () {
    return (
      <div>
        <ToDoForm
          addToDo={this.addToDo}
          title={this.state.title}
          dueDate={this.state.dueDate}
          updateDueDate={this.updateDueDate}
          updateTitle={this.updateTitle}

        />
        <button onClick={this.resetToDos} type='button'>Reset To Do List</button>
        <div style={list.container}>
          {
            this.state.toDos
              ? (
                <div style={list.container}>
                  <ToDoList toDos={this.state.completed} title={'Completed To Dos'}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteToDo}
                  />
                  <ToDoList toDos={this.state.incomplete} title={'Incomplete To Dos'}
                    markComplete={this.markComplete}
                  />
                </div>
              )
              : 'Loading...'
          }
        </div>
      </div>
    )
  }
}

export default ToDoContainer
