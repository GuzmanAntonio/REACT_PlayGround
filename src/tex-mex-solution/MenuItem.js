import React from 'react'
import PropTypes from 'prop-types'

const MenuItemStyle = {
  container: {
    border: '3px solid black',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {

  },
  subHeader: {

  },
  image: {
    marginBottom: '50px',
    borderRadius: '10px',
    maxWidth: '70%',
    maxHeight: '70%'
  }
}

const MenuItemDisplay = ({name, price, category, spiceLevel, img}) => {
  return (
    <div style={MenuItemStyle.container}>
      <h4 style={MenuItemStyle.header}>{name}</h4>
      <h4 style={MenuItemStyle.subHeader}>{price}</h4>
      <h4 style={MenuItemStyle.subHeader}>{category}</h4>
      <h4 style={MenuItemStyle.subHeader}>{spiceLevel}</h4>
      <img style={MenuItemStyle.image} src={img} />
    </div>
  )
}

MenuItemDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spiceLevel: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

export default MenuItemDisplay