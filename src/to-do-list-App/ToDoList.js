import React from 'react'
import PropTypes from 'prop-types'

const ToDoList = ({tasks}) => {
  return (
    <div>
      {
        tasks.map(item => {
          return (
            <div>
              <h3>{item.title}</h3>
              <h3>{item.dueDate}</h3>
              <h3>{item.status}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

ToDoList.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default ToDoList