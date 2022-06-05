import React, { useEffect, useState } from 'react'
import ShipCards from './ShipCards'
import { useNavigate } from 'react-router-dom'


const ShipList = () => {
  const [ ships, setShips ] = useState([])
  const navigate = useNavigate()
 

  useEffect(() => {
    fetch('http://localhost:9292/ships')
    .then(resp => resp.json())
    .then(ships => setShips(ships))
  }, [])

  const handleSubmit = (e, shipObj ) => {
    e.preventDefault()
    fetch('http://localhost:9292/ships', {
      method: "POST",
      headers: {
        "Content-Type": "apllication/json"
      },
      body: JSON.stringify({ shipObj })
    })
      .then(resp => resp.json())
      .then(shipObj => {
        setShips([shipObj, ...ships])
        navigate('/ships')
      })
  }

  // const addShip = (newShip) => {
  //   const updatedShips = [...ships, newShip]
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

const shipCards = ships.map((ship) => <ShipCards key={ ship.id } ship = { ship } deleteShip={ deleteShip } handleSubmit={handleSubmit}/>)
  return (
    <div>
      { shipCards }
    </div>
  )
}

export default ShipList