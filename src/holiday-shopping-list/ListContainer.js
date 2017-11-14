import React, {Component} from 'react'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class ListContainer extends Component {
  state = {
    gifts: undefined,
    nameOfGift: undefined,
    price: undefined,
    budget: 500,
    totalPrice: undefined
  }
  componentDidMount () {
    const giftArray = [{name: 'Apple TV', price: 300}, {name: 'candy', price: 3}]
    this.setState({gifts: giftArray})
  }
  handleNameOfGiftChange = (e) => {
    this.setState({nameOfGift: e.target.value})
  }
  handleNameOfPriceChange = (e) => {
    this.setState({price: e.target.value})
  }
  addNewGifts = (e) => {
    e.preventDefault()
    const newGift = {name: this.state.nameOfGift, price: this.state.price}
    const newGiftList = this.state.gifts
    newGiftList.push(newGift)
    let totalPrice = this.getTotalPrice()
    let giftPrice = Number(newGift.price)
    let budget = this.state.budget
    console.log(this.getTotalPrice(), newGift.price, this.state.budget)
    if (totalPrice + giftPrice > budget) {
      alert('Total Price is Greater than Your Total Budget')
      return
    } else {
      this.setState({gifts: newGiftList})
      this.setState({nameOfGift: ''})
      this.setState({priceOfGift: ''})
    }
    this.setState({gifts: newGiftList})
  }
  getTotalPrice = () => {
    const list = this.state.gifts
    let totalPrice = 0
    for (let x = 0; x < list.length; x++) {
      totalPrice += Number(list[x].price)
    }
    return totalPrice
  }

  render () {
    return (
      <div>
        <h3> List Container </h3>
        <GiftForm
          handleNameOfGiftChange={this.handleNameOfGiftChange}
          handleNameOfPriceChange={this.handleNameOfPriceChange}
          addNewGifts={this.addNewGifts}
        />
        {
          this.state.gifts
            ? <GiftList gifts={this.state.gifts} />
            : <h1> No Gifts Yet! </h1>
        }
      </div>
    )
  }
}

export default ListContainer
