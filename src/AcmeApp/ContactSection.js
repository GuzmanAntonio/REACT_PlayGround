import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: '3%',
    textAlign: 'center',
    color: '#9fa8a3',
    border: ' 3px solid #e3e0cf',
    margin: '2%'
  }
}

const Section = ({title, content, sectionStyle, children}) => {
  return (
    <div style={styles.container}>
      <h2> {title} </h2>
      <p> {content} </p>
      { children }
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  sectionStyle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Section
