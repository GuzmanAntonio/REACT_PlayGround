import React from 'react'
import Section from './Section'
import ServicesCard from './ServicesCard'

const Services = () =>
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

export default Services
