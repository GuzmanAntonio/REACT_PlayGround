import React from 'react'
import PropTypes from 'prop-types'

const RestaurantInfo = ({ name, address, phone }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <p>
          {address.street} {address.suite}
        </p>
        <p>
          {address.city}, {address.state}
        </p>
        <p>
          {address.zip}
        </p>
      </div>
      <p>{phone}</p>
    </div>
  )
}

RestaurantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired
}

export default RestaurantInfo