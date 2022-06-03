import React, { useEffect, useState } from 'react'
import PirateCards from './PirateCards'

const PirateList = () => {
    const [ pirates, setPirates ] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:9292/pirates')
      .then(resp => resp.json())
      .then(pirates => setPirates(pirates))
    }, [])

    const deletePirate = (id) =>{
      fetch(`http://localhost:9292/pirates/${id}`, {
        method: "DELETE",
      });
       removePirate(id)
    }
  
    const removePirate = (id) => {
     const updatedPirates = pirates.filter((pirate) => pirate.id !== id);
     setPirates(updatedPirates)
    }
  
  const pirateCards = pirates.map((pirate, index) => <PirateCards key={index} pirate = {pirate} deletePirate={deletePirate}/>)
    return (
      <div>
        { pirateCards }
      </div>
    )
  }
  

export default PirateList