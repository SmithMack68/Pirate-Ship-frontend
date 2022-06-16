import React, { useEffect, useState } from 'react'
import ShipCards from './ShipCards'
import { useNavigate } from 'react-router-dom'

const ShipList = () => {
const [ ships, setShips ] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/ships')
    .then(resp => resp.json())
    .then(ships => setShips(ships))
  }, [])

// const handleSubmit = (e) => {
//   e.preventDefault()
//   // const newShip={}
//   fetch('http://localhost:9292/ships', {
//     method: "POST",
//     headers: {
//       "Content-Type": "apllication/json"
//     },
//     body: JSON.stringify({ newShip })
//   })
//     .then(resp => resp.json())
//     .then(data => {
//       setShips(data)
//       navigate('/ships')
//     })
// }
  const handleAddShip = (newShip) => {
      setShips([...ships, newShip])
  
}

// const handleUpdatedShip = (updatedShip) => {
//   const updatedShips = ships.map((ship) =>
//   ship.id === updatedShip.id ? updatedShip : ship)
//   setShips(updatedShips)
// }

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

const shipCards = ships.map((ship) => <ShipCards key={ ship.id } ship = { ship } deleteShip={ deleteShip } onAddShip={handleAddShip} />)
  return (
    <div className='ship-container'>
      { shipCards }
    </div>
  )
}

export default ShipList