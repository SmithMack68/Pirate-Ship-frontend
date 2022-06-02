import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewShip = () => {
  const [ name, setName ] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:9292/ships', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({ name })
    })
      .then(resp => resp.json())
      .then(data => {
        setName(data)
        navigate('/ships')
      })
  }

  return (
    <div>
      <h1>Add Ship</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={handleChange} autoFocus={true}/>
        </div>
        <br/>
        <input type="submit" value="Build Ship"/>
      </form>
    </div>
  )
}

export default NewShip





  
  