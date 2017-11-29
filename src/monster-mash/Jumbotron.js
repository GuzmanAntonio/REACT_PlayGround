import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#404040',
    color: '#ecf0f1',
    marginBottom: '5%',
    fontSize: '30px',
    border: '4px solid #ecf0f1'
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