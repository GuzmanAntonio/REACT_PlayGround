import React from 'react'
import MenuCard from'./MenuCard'

const Food = ({items}) => {
  return(
    <div>
      {
        items.map(item => 
          <MenuCard
            name={item.name}
            price={item.price}
            category={item.category}
            spiceLevel={item.spiceLevel}
            img={item.img}
          />
        )
      }
    </div>
  )
}

export default Food