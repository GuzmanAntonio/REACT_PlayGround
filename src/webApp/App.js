import React from 'react'
import faker from 'faker'
import './style.css'
import Jumbotron from './Jumbotron'
import NavigationBar from './NavigationBar'
import Section from './Section'
import ServicesCard from './ServicesCard'
import ProductCard from './ProductCard'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron
        title={faker.name.title()}
        desc={faker.lorem.sentences()}
      />
  <Section
        sectionStyle='about'
        title={'About'}
  content={'All about us'}
      />
      <Section
        sectionStyle='services'
  title={'Services'}
        content={'Read about our services'}
      >
        <div className='service-card-container'>
          <ServicesCard
            title={'Video Webinars'}
  details={'Ichiban Video Webinars'}
          />

          <ServicesCard
            title={'Video Webinars'}
            details={'Ichiban Video Webinars'}
          />

          <ServicesCard
            title={'Video Webinars'}
  details={'Ichiban Video Webinars'}
          />

          <ServicesCard
            title={'Video Webinars'}
  details={'Ichiban Video Webinars'}
          />
        </div>
      </Section>

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
    </div>
  )
}

export default App
