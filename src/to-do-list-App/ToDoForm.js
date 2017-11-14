import React from 'react'
import PropTypes from 'prop-types'
import ToDolistContainer from './ToDoListContainer'

const ToDoForm = () => {
  return (
    <div>
      <div>
        <label>Assignment</label>
        <input onChange={handleTaskChange} placeholder='Enter Name of Task' />
      </div>
      <div>
        <label>Due Date</label>
        <input onChange={handleTaskDueDateChange} placeholder='Enter Task Due Date' />
      </div>
      <div>
        <label>Status</label>
        <input onChange={handleTaskStatusChange} placeholder='Enter Task Status'/>
      </div>
    </div>
  )
}

ToDoForm.propTypes = {
  handleTaskChange: PropTypes.func.isRequired,
  handleTaskDueDate: PropTypes.func.isRequired,
  handleTaskStatusChange: PropTypes.func.isRequired
}

export default ToDoForm