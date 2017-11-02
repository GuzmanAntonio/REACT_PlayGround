import React, {Component} from 'react'
import DATA from './DATA'
import './styles.css'
import faker from 'faker'
import Chats from './Chat'

class ChatterApp extends Component {
  state = {
    chats: undefined
  }
  componentDidMount () {
    alert('COMPONENT DID MOUNT')

    setTimeout(() => {
      this.setChatData()
    }, 1000)
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
  render () {
    return (
      <div>
        <h1>Herro From Chatter App</h1>
        {
          this.state.chats ? <Chats chats={this.state.chats} /> : 'Loading...'
        }
      </div>
    )
  }
}

export default ChatterApp
