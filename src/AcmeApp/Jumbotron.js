import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '5%',
    marginTop: '3%',
    marginRight: '5%',
    paddingTop: '3%',
    paddingBottom: '3%',
    color: 'white',
    backgroundColor: '#c5d5cb',
    fontSize: '40px',
    borderTop: '3px solid #e3e0cf',
    borderLeft: '3px solid #e3e0cf',
    borderRight: '3px solid #e3e0cf'
  }
}

const Jumbotron = ({title}) => {
  return (
    <div style={styles.container}>
      <h1> {title} </h1>
    </div>
  )
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired
}

export default Jumbotron