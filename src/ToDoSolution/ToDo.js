import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({title, dueDate, id, complete, markComplete, deleteTodo}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{dueDate}</p>
      <p>{id}</p>
      <p>{complete}</p>
      <button onClick={markComplete} id={id} type='button'>Complete </button>
      {
        complete
          ? 'Mark as Incomplete'
          : 'Mark as Complete'
      }
      <button onClick={deleteTodo} id={id} type='button'>Delete To Do</button>
    </div>
  )
}

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default ToDo
