import React from 'react'
import PropTypes from 'prop-types'
import MonsterCard from './MonsterCard'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const MonsterSection = ({monsters}) => {
  return (
    <div style={styles.container}>
      {
        monsters.map((monster) => {
          return <MonsterCard monster={monster} />
        })
      }
    </div>
  )
}

MonsterSection.propTypes = {
  monsters: PropTypes.array.isRequired
}

export default MonsterSection