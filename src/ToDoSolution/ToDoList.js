import React from 'react'
import ToDo from './ToDo'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '1px solid #7f8c8d',
    width: '50%',
    backgroundColor: '#bdc3c7'
  }
}

const ToDoList = ({toDos, title, markComplete, deleteTodo}) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {
        toDos.length > 0
          ? toDos.map(toDo => {
            return <ToDo
              title={toDo.title}
              dueDate={toDo.dueDate}
              complete={toDo.complete}
              id={toDo.id}
              markComplete={markComplete}
              deleteTodo={deleteTodo}
            />
          })
          : 'Nothing To Do'
      }
    </div>
  )
}

ToDoList.propTypes = {
  toDo: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}
export default ToDoList
