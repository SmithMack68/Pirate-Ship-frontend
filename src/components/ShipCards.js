import React from 'react'


const ShipCards = ({ ship }) => {
  return (
    <div>
        <h2>{ ship.name }</h2>
        <ul>
          <li>Ship Type: { ship.ship_type }</li>
          <li>Ranking: { ship.ranking }</li>
          <li>Status: { ship.status }</li>
          <li>Crew: { ship.pirates.map((pirate) => 
                <ul>{pirate.title } : {pirate.name}</ul>
               )} </li> 
        </ul>
    </div>
  )
}

export default ShipCards