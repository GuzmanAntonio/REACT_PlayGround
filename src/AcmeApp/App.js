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

const AddressCard = ({street, city, state, zip}) => {
  return (
    <div style={styles.container}>
      <div>
        <h3>ADDRESS:</h3>
      </div>
      <p> {street} </p>
      <p> {city}, {state} {zip} </p>
    </div>
  )
}

AddressCard.propTypes = {
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
}

export default AddressCard