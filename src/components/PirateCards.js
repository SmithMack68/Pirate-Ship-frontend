import React from 'react'

const PirateCards = ({ pirate }) => {
  return (
    <div> 
        <h2>{ pirate.name }</h2>
    <ul>
      <li>Ship: { pirate.ship_name }</li>
      <li>Title: { pirate.title }</li>
      <li>Status: { pirate.status }</li>
      <li>Notoriety: { pirate.notoriety }</li>
    </ul>
    </div>
  )
}

export default PirateCards