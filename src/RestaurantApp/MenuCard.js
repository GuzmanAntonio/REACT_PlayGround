import React from 'react'

const menuStyle = {
  container: {
    backgroundColor: 'grey'
  },
  mainText: {
    color: 'red'
  },
  backupText: {
    color: 'blue'
  }
}

const MenuCard = ({food, contactInfo, PhysicalLocation, img}) => {
  return (
    <div style={menuStyle.container}>
      <h3> {food} </h3>
      <img src={img} />
      <p>{contactInfo}</p>
      <p>{physicalLocation}</p>
    </div>
  )
}

export default MenuCard