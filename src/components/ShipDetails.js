import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import PirateCards from './PirateCards'

const ShipDetails = () => {
    const [ ship, setShip ] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:9292/ships/${id}`)
        .then(resp => resp.json())
        .then(ship => setShip(ship))
      }, [id])
      

      const handleNavigate = () => {
        navigate(`/ships/${id}/pirates/crew`)
      }

    // const pirateCards = ship.pirates.map((pirate, index) => <PirateCards key={index} pirate={pirate} ship={ship} />) 
  return (
    <div style={{fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 25}}>
        <h1 style={{ fontFamily: "fantasy", textAlign: "center",color:"#6991B3", fontSize: 45}}>{ ship.name }</h1>
        <ul>Class: { ship.ship_type }</ul>
        <ul>Ranking: { ship.ranking }</ul>
        <ul>Status: { ship.status }</ul>
            {/* { pirateCards } */}
        <button onClick={ handleNavigate } style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 150, fontSize: 18, backgroundColor: "#6991B3"}}>Add Crew</button>
    </div>
  )
}

export default ShipDetails