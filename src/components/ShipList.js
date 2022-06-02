import React, { useEffect, useState } from 'react'
import ShipCards from './ShipCards'


const ShipList = () => {
  const [ ships, setShips ] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/ships')
    .then(resp => resp.json())
    .then(ships => setShips(ships))
  }, [])

const shipCards = ships.map((ship, index) => <ShipCards key={index} ship = { ship } />)
  return (
    <div>
      <h1>Ships</h1>
      { shipCards }
    </div>
  )
}

export default ShipList