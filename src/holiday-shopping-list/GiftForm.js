import React from 'react'
import PropTypes from 'prop-types'


const GiftForm = ({handleNameOfGiftChange, addNewGifts, handleNameOfPriceChange}) => {
  return (
    <div>
      <div>
        <label>Gift Name</label>
        <input onChange={handleNameOfGiftChange} placeholder='Enter Name of Gift' />
      </div>
      <div>
        <label >Gift Price</label>
        <input onChange={handleNameOfPriceChange} placeholder='Enter Price' />
      </div>
      <div>
        <button type='button' onClick={addNewGifts}>Touch Me</button>
      </div>
    </div>
  )
}

GiftForm.propTypes = {
  handleNameOfGiftChange: PropTypes.func.isRequired,
  handleNameOfPriceChange: PropTypes.func.isRequired,
  addNewGifts: PropTypes.func.isRequired
}

export default GiftForm
