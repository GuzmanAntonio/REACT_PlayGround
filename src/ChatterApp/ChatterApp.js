import React, {Component} from 'react'
import './styles.css'
import faker from 'faker'
import Chats from './Chat'
import ChatForm from './ChatForm'

const style = {
  container: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceBetween',
    marginTop: '5%',
    marginBottom: '10%'
  }
}

class ChatterApp extends Component {
  state = {
    chats: undefined,
    message: undefined,
    username: undefined,
  }
  componentDidMount () { //WHEN THIS PAGE LOADS
    alert('COMPONENT DID MOUNT')

    setTimeout(() => {
      this.setChatData()
    }, 1000)
  }

  setAvatar = (e) => {
    let avatar = e.target.value
    this.setState({avatar: avatar})
    console.log(this.state.avatar)
  }

  setUserName = (e) => {
    let username = e.target.value
    this.setState({username: username})
    console.log(this.state.username)
  }

  setMessage = (e) => {
    let message = e.target.value
    this.setState({message: message})
    console.log(this.state.message)
  }

  setChatData () {
    alert('ABOUT TO SET CHAT DATA')
    let chats = []
    for (let x = 0; x < 11; x++) {
      let chat = {
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        message: faker.random.words()
      }
      chats.push(chat)
    }
    this.setState({chats: chats})
  }
  
  submitInfo = (e) => {
    e.preventDefault()
    let newChat = {
      avatar: this.state.avatar,
      username: this.state.username,
      message: this.state.message
    }
    let allChats = this.state.chats
    allChats.unshift(newChat)
    this.setState({chats: allChats})

  }

  render () {
    return (
      <div>
        <h1>Hello From Chatter App</h1>
        {
          this.state.chats ? <Chats chats={this.state.chats} /> : 'Loading...'
        }
        <h3>Add a new Chat</h3>
        <ChatForm />
      </div>
    )
  }
}

export default ChatterApp
