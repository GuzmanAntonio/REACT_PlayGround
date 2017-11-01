import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = ({product, price, img}) => {
  return (
    <div className='product-card'>
      <img src={img} />
      <h4> {price} / {product} </h4>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default ProductCard