import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  linkIcon: {
    color: '#e3e0cf'
  },
  link: {
    textDecoration: 'none',
    color: '#9fa8a3',
    paddingLeft: '3px'
  }
}

const Link = ({name, icon}) => {
  return (
    <div className='link'>
      <span style={styles.linkIcon} className={`fa fa-${icon}`} />
      <a style={styles.link} href='#'> {name} </a>
    </div>
  )
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Link