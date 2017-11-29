import React from 'react'
import PropTypes from 'prop-types'

const MenuStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '15px'
  },
  header: {
    color: '#27ae60'
  },
  subHeader: {
    color: '#2ecc71'
  },
  image: {
    borderRadius: '10px',
    maxWidth: '70%'
  }
}

const MenuItems = ({ name, price, category, spiceLevel, img }) => {
  return (
    <div style={MenuStyle.container}>
      <p style={MenuStyle.header}>{name}</p>
      <p style={MenuStyle.subHeader}>{price}</p>
      <p style={MenuStyle.subHeader}>{category}</p>
      <p style={MenuStyle.subHeader}>{spiceLevel}</p>
      <img style={MenuStyle.image} src={img} />
    </div>
  )
}

MenuItems.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spiceLevel: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

export default MenuItems