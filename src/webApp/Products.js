import React from 'react'
import Section from './Section'
import ProductCard from './ProductCard'
import faker from 'faker'

const Products = () =>
  <Section
    sectionStyle='products'
    title={'Products'}
    content={'Best selling products'}
  >
    <ProductCard
      product={faker.commerce.product()}
      price={faker.commerce.price()}
      img={faker.random.image()}
    />
    <ProductCard
      product={faker.commerce.product()}
      price={faker.commerce.price()}
      img={faker.random.image()}
    />
    <ProductCard
      product={faker.commerce.product()}
      price={faker.commerce.price()}
      img={faker.random.image()}
    />
    <ProductCard
      product={faker.commerce.product()}
      price={faker.commerce.price()}
      img={faker.random.image()}
    />
    <ProductCard
      product={faker.commerce.product()}
      price={faker.commerce.price()}
      img={faker.random.image()}
    />
  </Section>

export default Products
