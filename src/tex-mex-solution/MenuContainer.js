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
    //alert('Component Did Mount')
    this.setState({menuItems: CODE.items})
  }

  handleSearchTermChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  resetMenuList = () => {
    this.setState({menuItems: CODE.items, searchTerm: ' '})
  }

  setMenuItemsToMild = () => {
    const mildFoods = this.state.menuItems.filter((item) => {
      return item.spiceLevel < 4
    })
    console.log(mildFoods)
    this.setState({menuItems: mildFoods})
  }

  updateMenuList = (e) => {
    e.preventDefault()
    const updateMenuList = this.state.menuItems.filter(item => {
      const searchTerm = this.state.searchTerm.toLowerCase()
      const menuItems = item.name.toLowerCase()
      return menuItems.includes(searchTerm)
    })
    this.setState({menuItems: updateMenuList})
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