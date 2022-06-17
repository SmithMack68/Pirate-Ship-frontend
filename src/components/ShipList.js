import React, { useEffect, useState } from 'react'
import ShipCards from './ShipCards'
// import { useNavigate } from 'react-router-dom'

const ShipList = () => {
const [ ships, setShips ] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/ships')
    .then(resp => resp.json())
    .then(ships => setShips(ships))
  }, [])


  const handleAddShip = (newShip) => {
      setShips([...ships, newShip])
  
}

  const deleteShip = (id) =>{
    fetch(`http://localhost:9292/ships/${id}`, {
      method: "DELETE",
    });
     removeShip(id)
  }

  const removeShip = (id) => {
   const updatedShips = ships.filter((ship) => ship.id !== id);
   setShips(updatedShips)
  }

const shipCards = ships.map((ship) => <ShipCards key={ ship.id } ship={ ship } deleteShip={ deleteShip } onAddShip={handleAddShip} />)
  return (
    <div className='ship-container'>
      { shipCards }
    </div>
  )
}

export default ShipList