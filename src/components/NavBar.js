import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <ul>
        <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ships">Ships</Link></li>
        <li><Link to="/ships/new">Build Ship</Link></li>
        <li><Link to="/pirates">Pirates</Link></li>
        <li><Link to="/pirates/new">Add Pirate</Link></li>
        </nav>
      </ul>
    </div>
  )
}

export default NavBar