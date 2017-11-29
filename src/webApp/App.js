import React from 'react'
import faker from 'faker'
import './style.css'
import Jumbotron from './Jumbotron'
import NavigationBar from './NavigationBar'
import Section from './Section'
import ServicesCard from './ServicesCard'
import ProductCard from './ProductCard'
import About from './About'
import Services from './Services'
import Products from './Products'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Jumbotron} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />

        <NavigationBar />

      </div>
    </Router>
  )
}

export default App
