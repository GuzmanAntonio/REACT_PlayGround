import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
    marginBottom: '10%'
  }
}

const ChatForm = ({setUserName, setMessage, setAvatar, submitInfo}) => {
  return (
    <form style={style.container}>
      <input placeholder='Message' onChange={this.setMessage} />
      <input placeholder='Username'onChange={this.setUserName} />
      <input placeholder='Avatar' onChange={this.setAvatar} />
      <button type='Submit' onClick={this.submitInfo}>Submit</button>
    </form>
  )
}

ChatForm.propTypes = {
  setUserName: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  setAvatar: PropTypes.func.isRequired,
  submitInfo: PropTypes.func.isRequired
}

export default ChatForm
