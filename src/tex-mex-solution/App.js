import React, {Component} from 'react'
import data from '../RestaurantApp/CODE'
import RestaurantInfo from './ResturantInfo'
import MenuContainer from './MenuContainer'

const App = () =>
  <div>
    <RestaurantInfo
      name={data.company[0].title}
      address={data.address}
      phone={data.phone}
    />
    <MenuContainer />
  </div>

export default App
