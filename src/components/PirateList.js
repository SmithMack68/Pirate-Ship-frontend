import React, { useEffect, useState } from 'react'
import PirateCards from './PirateCards'

const PirateList = () => {
    const [ pirates, setPirates ] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:9292/pirates')
      .then(resp => resp.json())
      .then(pirates => setPirates(pirates))
    }, [])
  
  const pirateCards = pirates.map((pirate, index) => <PirateCards key={index} pirate = { pirate }/>)
    return (
      <div>
        <h1>Pirates</h1>
        { pirateCards }
      </div>
    )
  }
  

export default PirateList