import React from 'react'
import Data from './Data'
import DrinkList from './DrinkList'

// Display only the Classic Espresso Drinks using map and filter in App.js

const App = () => {
  const classicExpresso = Data.filter(item => {
    return item.category === 'Classic Espresso Drinks'
  })

  const SignitureEspresso = Data.filter(item => {
    return item.category === 'Signiture Espresso Drinks'
  })

  const NoMilk = Data.filter(item => {
    let itemArr = item.category.split(' ')
    return itemArr[itemArr.length - 1] !== 'Milk'
  })
  return (
    <div>
      <h1> Classic Espresso </h1>
      <DrinkList data={classicExpresso} />
      <h1> Signiture Espresso </h1>
      <DrinkList data={SignitureEspresso} />
      <h1> Dairy Free </h1>
      <DrinkList data={NoMilk} />
    </div>
  )
}

export default App
