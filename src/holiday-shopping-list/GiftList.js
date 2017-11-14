import React from 'react'
import PropTypes from 'prop-types'

const GiftList = ({gifts}) => {
  return (
    <div>
      {
        gifts.map(item => {
          return (
            <div>
              <h3>{item.name}</h3>
              <h3>{item.price}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

GiftList.propTypes = {
  gifts: PropTypes.array.isRequired
}

export default GiftList
