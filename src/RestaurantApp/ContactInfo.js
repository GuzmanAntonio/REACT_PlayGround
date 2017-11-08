import React from 'react'
import MenuCard from'./MenuCard'

const ContactInfo = ({company}) => {
  return (
    <div>
      {
        <MenuCard
          company={company.title}
        />
      }
    </div>
  )
}

export default ContactInfo