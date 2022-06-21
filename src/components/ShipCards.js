import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ShipCards = ({ ship, deleteShip }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/ships/${ship.id}`)
  }
  return (
    <div className='card'>
    <div style={{fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 25}}>
        <h2 style={{ fontFamily: "fantasy", textAlign: "center",color:"#6991B3", fontSize: 45}}>{ ship.name }</h2>  
        <ul>Class: { ship.ship_type }</ul>
        <ul>Ranking: { ship.ranking }</ul>
        <ul>Status: { ship.status }</ul>
        <ul>Ship's Crew:{ ship.pirates.map((pirate, index) => 
        <div key={index}>{pirate.title }  : {pirate.name}</div>
              )} </ul> 
        <div>     
        <button onClick={(e) => deleteShip(ship.id)} style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 150, fontSize: 18, backgroundColor: "#6991B3"}}>Sink Ship</button>
        <button onClick={ handleNavigate } style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 150, fontSize: 18, backgroundColor: "#6991B3"}}>Ship Details</button>
        </div>      
      </div>
      </div>
  )
}

export default ShipCards