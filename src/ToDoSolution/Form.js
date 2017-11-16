import React from 'react'
import PropTypes from 'prop-types'

const formStyle = {
  formContainer: {
    background: '#bdc3c7',
    padding: '40px',
    width: '80vw',
    margin: '10',
    display: 'flex',
    border: '2px solid #7f8c8d'
  },

  field: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginBottom: '15px'
  },

  input: {
    padding: '15px',
    borderRadius: '5px'
  },

  label: {
    textTransform: 'uppercase',
    fontColor: 'red'
  }
}

const ToDoForm = ({addToDo, title, dueDate, updateTitle, updateDueDate}) => {
  return (
    <form style={formStyle.formContainer}>
      <div style={formStyle.field}>
        <label style={formStyle.label}>Title</label>
        <input type='text' value={title} onChange={updateTitle} />
      </div>
      <div style={formStyle.field}>
        <label style={formStyle.label}>Due Date</label>
        <input type='date' value={dueDate} onChange={updateDueDate} />
      </div>
      <div>
        <button onClick={addToDo}>Submit</button>
      </div>
    </form>
  )
}

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  updateDueDate: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired
}

export default ToDoForm
