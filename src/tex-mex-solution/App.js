import React, {Component} from 'react'
import data from '../RestaurantApp/CODE'
import RestaurantInfo from './ResturantInfo'
import MenuContainer from './MenuContainer'

class App extends Component {
  render () {
    return (
      <div>
        <RestaurantInfo 
          name={data.company[0].title}
          address={data.address}
          phone={data.phone}
        />
        <MenuContainer />
      </div>
    )
  }
}

export default App 
