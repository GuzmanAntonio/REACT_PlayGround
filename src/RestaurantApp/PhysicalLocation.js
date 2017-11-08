import React from 'react'
import MenuCard from'./MenuCard'

const PhysicalLocation = ({address}) => {
  return (
    <div>
      {
        address.map(address => 
          <MenuCard
            street={address.street}
            suite={address.suite}
            city={address.city}
            state={address.state}
            zip={address.zip}
          />
        )
      }
    </div>
  )
}

export default PhysicalLocation