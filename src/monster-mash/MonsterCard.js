import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: '65%',
    border: '4px solid #404040',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '3%',
    paddingBottom: '5%',
    backgroundColor: '#cccccc',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23404040' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    color: '#404040'
  },
  img: {
    width: '75%',
    border: '4px solid #404040',
    borderRadius: 6
  }
}

const MonsterCard = ({monster}) => {
  return (
    <div style={styles.container}>
      <h1> {monster.name} </h1>
      {
        monster.diet.map((food) => {
          return <p> {food} </p>
        })
      }
      <img style={styles.img} src={monster.img} />
    </div>
  )
}

MonsterCard.propTypes = {
  monster: PropTypes.object.isRequired
}

export default MonsterCard