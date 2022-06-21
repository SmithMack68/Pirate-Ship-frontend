import React from 'react'

const PirateCards = ({ pirate, deletePirate }) => {
  return (
    <div className='pirate-card-container'>
    <div style={{ fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 25}}> 
      <h2 style={{ fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 45}}>{ pirate.name }</h2>
      <ul>Title: { pirate.title }</ul>
      <ul>Ship: { pirate.ship_name }</ul>
      <button onClick={(e) => deletePirate(pirate.id)} style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 150, fontSize: 18, backgroundColor: "#6991B3"}}>Keelhaul</button> 
    </div>
    </div>
  )
}

export default PirateCards