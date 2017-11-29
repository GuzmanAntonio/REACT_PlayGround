import React, {Component} from 'react'
import data from './data'
import MenuList from './MenuList'
import SearchForm from './SearchForm'

class MenuContainer extends Component {
  state = {
    menuItems: undefined,
    searchTerm: undefined
  }
  componentDidMount () {
    this.setState({ menuItems: data.items })
  }

  handleSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  resetMenuList = () => {
    this.setState({ menuItems: data.items, searchTerm: '' })
  }

  setMenuItemsToMild = () => {
    const mildFoods = this.state.menuItems.filter(item => {
      return item.spiceLevel < 4
    })
    this.setState({ menuItems: mildFoods })
  }

  setMenuItemsToMedium = () => {
    const mediumFoods = this.state.menuItems.filter(item => {
      return (item.spiceLevel >= 4 && item.spiceLevel <= 7)
    })
    this.setState({ menuItems: mediumFoods })
  }

  setMenuItemsToSpicy = () => {
    const spicyFoods = this.state.menuItems.filter(item => {
      return item.spiceLevel > 7
    })
    this.setState({ menuItems: spicyFoods })
  }

  updateMenuList = (e) => {
    e.preventDefault()

    const {menuItems, searchTerm} = this.state

    const updatedMenuItems = menuItems.filter(item => {
      const searchTermToLowerCase = searchTerm.toLowerCase()
      const menuItem = item.name.toLowerCase()
      return menuItem.includes(searchTermToLowerCase)
    })
    console.log(updatedMenuItems)
    this.setState({ menuItems: updatedMenuItems })
  }

  render () {
    return (
      <div>
        <SearchForm
          handleSearchTermChange={this.handleSearchTermChange}
          updateMenuList={this.updateMenuList}
          resetMenuList={this.resetMenuList}
          searchTerm={this.state.searchTerm}
          setMenuItemsToMild={this.setMenuItemsToMild}
          setMenuItemsToMedium={this.setMenuItemsToMedium}
          setMenuItemsToSpicy={this.setMenuItemsToSpicy}
        />
        {
          this.state.menuItems
            ? <MenuList foodItems={this.state.menuItems} />
            : <h3>You don't have menu items</h3>
        }
      </div>
    )
  }
}
export default MenuContainer
