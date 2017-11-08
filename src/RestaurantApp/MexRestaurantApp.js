import React, {Component} from 'react'
import './style.css'
import Food from './Food'
import ContactInfo from './ContactInfo'
import PhysicalLocation from './PhysicalLocation'

const MexRestaurantApp extends Component {
  state = {
    items: undefined,
    company: undefined,
    address: undefined,
  }

  componentDidMount () {
    alert('Welcome to the Texi-Mexi')
  }
}

setFood = (e) => {
  let food = e.target.value
  this.setState({food: food})
  console.log(this.state.food)
}

setContactInfo = (e) => {
  let contactinfo = e.target.value
  this.setState({contactinfo = contactinfo})
}

setPhysicalLocation = (e) => {
  let physciallocation = e.target.value
  this.setState({physicallocation: physicallocation})
}

setImg = (e) => {
  let img = e.target.value
  this.setState({img: img})
}

setMenuData () {
  alert('ABOUT TO SET MENU DATA')
  let menus = []
  let menu = {
    food: 
    contactinfo:
    physciallocation:
    img: 
  }
}

submitInfo = (e) => {
  e.preventDefault()
  let newMenu = {
    food: this.state.food,
    contactinfo: this.state.contactinfo,
    physciallocation: this.state.physciallocation,
    img: this.state.img,
  }
  let allMenus = this.state.menus
  allChats.unshift(newMenu)
  this.setState({menus: allMenus})
}

render () {
  return (
    <div>
      <h1>Texi-Mexi</h1>
    </div>
  )
}

export default MexRestaurantApp