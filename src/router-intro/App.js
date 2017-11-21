import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => <div>Home Page</div>
const Blog = () => <div>Blog Page</div>
const Contact = () => <div>Contact</div>

const Products = ({match}) =>
  <div>
    <h4>You found Product: {match.params.productName} </h4>
  </div>

Products.propTypes = {
  match: PropTypes.object.isRequired
}

const NavigationBar = () =>
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/blog'>Blog</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/products/hat'>Products</Link>
  </nav>

const App = () => 
  <Router>
    <div>
      <NavigationBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' render={() => <div>Buh Bye</div>} />
      <Route path='/blog' component={Blog} />
      <Route path='/contact' component={Contact} />
      <Route path='/products/:productName' component={Products} />
    </div>
  </Router>

export default App
