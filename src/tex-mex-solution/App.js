import React from 'react'
import data from './data'
import ResturantInfo from './ResturantInfo'
import MenuContainer from './MenuContainer'

const App = () =>
  <div>
    <ResturantInfo
      name={data.company[0].title}
      address={data.address}
      phone={data.phone}
    />
    <MenuContainer />
  </div>

export default App