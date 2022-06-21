import React, { useEffect, useState } from 'react'
import ShipCards from './ShipCards'

const ShipList = () => {
const [ ships, setShips ] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/ships')
    .then(resp => resp.json())
    .then(ships => setShips(ships))
  }, [])

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

const shipCards = ships.map((ship, index) => <ShipCards key={index} ship={ship} deleteShip={deleteShip} />)
  return (
    <div className='ship-container'>
      { shipCards }
    </div>
  )
}

export default ShipList