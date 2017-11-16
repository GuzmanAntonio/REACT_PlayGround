import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '3%',
    backgroundColor: '#ecf0f1',
    color: '50%' 
  }
}

const ClassInfo = ({item}) => {
  return (
    <div style={styles.container}>
      <h3>{item.name}</h3>
      <h3>{item.cost}</h3>
      <h3>{item.instructor}</h3>
      <h3>{item.location}</h3>
    </div>
  )
}

ClassInfo.propTypes = {
  item: PropTypes.object.isRequired
}
export default ClassInfo