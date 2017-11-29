import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center',
    width: '50%',
    color: '#c5d5cb'
  }
}

const PhoneCard = ({phone}) => {
  return (
    <div style={styles.container}>
      <div>
        <h3>PHONE:</h3>
      </div>
      <p> {phone} </p>
    </div>
  )
}

PhoneCard.propTypes = {
  phone: PropTypes.string.isRequired
}

export default PhoneCard