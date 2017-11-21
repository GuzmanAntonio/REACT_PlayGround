import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => <div>Home Page</div>

const Products = ({match}) => 
<div>
  <h4>You found product: {match.params.productName}</h4>
</div>

Products.propTypes = {
  match: PropTypes.object.isRequired
}

const NavBar = () =>
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/blog'>Blog</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/products/tv'>TV</Link>
    <Link to='/products/computer'>Computer</Link>
    <Link to='products/hat'>Hat</Link>
  </nav>

const App2 = () =>
  <Router>
    <div>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' render={() => <div>About</div>} />
      <Route path='/blog' render={() => <div>Blog</div>} />
      <Route path='/contact' render={() => <div>Contact</div>} />
      <Route path='/products/:productNames' component={Products} />
    </div>
  </Router>

export default App2
