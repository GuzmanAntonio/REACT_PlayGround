import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end',
    width: '30%',
    paddingTop: '4%',
    paddingBottom: '4%',
    marginTop: '2%',
    color: '#9fa8a3',
    marginBottom: '2%',
    backgroundColor: 'white',
    boxShadow: '2px 2px 10px #e3e0cf'
  },
  emailButton: {
    backgroundColor: '#c5d5cb',
    color: 'white',
    border: 'none',
    padding: '3%'
  },
  image: {
    width: '29%',
    border: '2px solid #c5d5cb'
  }
}

const CustomerCard = ({img, name, email}) => {
  return (
    <div style={styles.container}>
      <img style={styles.image}src={img} />
      <h4>{name}</h4>
      <p>{email}</p>
      <button type='button' style={styles.emailButton}> SEND AN EMAIL </button>
    </div>
  )
}

CustomerCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default CustomerCard
