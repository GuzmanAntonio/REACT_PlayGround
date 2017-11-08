import React, {Component} from 'react'
import CODE from '../RestaurantApp/CODE'
import MenuList from './MenuList'
import MenuItem from './MenuItem'
import SearchForm from './SearchForm'

class MenuContainer extends Component {
  state={
    menuItems: undefined,
    searchTerm: undefined
  }
  componentDidMount () {
    alert('Component Did Mount')
    this.setState({menuItems: CODE.items})
  }
  handleSearchTermChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  updatedMenuList = (e) => {
    e.preventDefault()
    const updatedMenuList = this.state.menuItems.filter(item => {
      return item.name === item.state.searchTerm
    })
    console.log(updatedMenuList)
  }
  render () {
    return (
      <div>
        <SearchForm
          handleSearchTermChange={this.handleSearchTermChange}
          updatedMenuList={this.updateMenuList}
        />
        {
          this.state.menuItems
            ? <MenuList foodItems={this.state.menuItems} />
            : <h3> You don't have menu items </h3>
        }
      </div>
    )
  }
}

export default MenuContainer
