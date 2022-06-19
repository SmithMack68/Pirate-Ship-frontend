import React from 'react'

const ShipCards = ({ ship, deleteShip }) => {
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
        <button style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 150, fontSize: 18, backgroundColor: "#6991B3"}}>Add Pirate Crew</button>
        {/* <Routes>
          <Route path="/pirates/new"></Route>
        </Routes> */}
        </div>      
      </div>
      </div>
  )
}

export default ShipCards