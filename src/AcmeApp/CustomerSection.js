import React from 'react'
import PropTypes from 'prop-types'
import CustomerCard from './CustomerCard'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: '8%',
    marginLeft: '3%',
    marginRight: '3%',
    backgroundColor: 'white',
    borderBottom: '2px solid #c5d5cb',
    paddingBottom: '3%'
  },
  customerHeader: {
    display: 'flex',
    justifyContent: 'center',
    margin: '8% 5% 3% 5%',
    padding: '3%',
    color: '#e3e0cf',
    borderBottom: '2px solid #c5d5cb',
    borderTop: '2px solid #c5d5cb',
    fontSize: '30px'
  }
}

const CustomerSection = ({arr, customer}) => {
  return (
    <div>
      <div>
        <h2 style={styles.customerHeader}>MEET SOME OF OUR BEST CUSTOMERS:</h2>
      </div>
      <div style={styles.container}>
        {
          arr.map((customer) => {
            return <CustomerCard
              img={customer.img}
              name={customer.name}
              email={customer.email}
            />
          })
        }
      </div>
    </div>
  )
}

CustomerSection.propTypes = {
  arr: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired
}

export default CustomerSection