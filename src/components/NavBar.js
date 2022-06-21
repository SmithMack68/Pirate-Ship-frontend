import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div style={{fontFamily: "fantasy", textAlign: "justify", color:"#4087A5"}}>
      <ul>
        <nav>
        <li><Link to="/" style={{fontFamily: "fantasy", textAlign: "justify", color:"#6991B3", fontSize: 35}}>Home</Link></li>
        <li><Link to="/ships" style={{fontFamily: "fantasy", textAlign: "justify", color:"#6991B3", fontSize: 35}}>Ships</Link></li>
        <li><Link to="/ships/new" style={{fontFamily: "fantasy", textAlign: "justify", color:"#6991B3", fontSize: 35}}>Add Ship</Link></li>
        <li><Link to="/ships/crew" style={{fontFamily: "fantasy", textAlign: "justify", color:"#6991B3", fontSize: 35}}>Add Crew</Link></li>
        <li><Link to="/pirates" style={{fontFamily: "fantasy", textAlign: "justify", color:"#6991B3", fontSize: 35}}>Pirates</Link></li>
        <li><Link to="/pirates/new" style={{fontFamily: "fantasy", textAlign: "justify", color:"#6991B3", fontSize: 35}}>Add Pirate</Link></li>
        </nav>
      </ul>
    </div>
  )
}

export default NavBar