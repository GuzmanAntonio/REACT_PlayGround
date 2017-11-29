import React from 'react'
import PropTypes from 'prop-types'

const chatStyle = {
  container: {
    backgroundColor: '#cecece',
    padding: '20px',
    border: '1px dotted black',
    marginTop: '2%',
    display: 'flex',
    flexDirection: 'row'
  },
  mainText: {
    color: 'red'
  },
  backupText: {
    color: 'blue'
  },
  profileInfo: {
    marginRight: '5%'
  },
  image: {
    width: '100px',
    height: '60px'
  }
}

const ChatBox = ({username, message, avatar}) => {
  return (
    <div style={chatStyle.container}>
      <div style={chatStyle.profileInfo}>
        <img src={avatar} />
        <h3 style={username.length > 10
          ? chatStyle.mainText
          : chatStyle.backupText
        }
        >{username}</h3>
      </div>
      <p>{message}</p>
    </div>
  )
}

ChatBox.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default ChatBox
