import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom'

const NewPirate = () => {
  const [ state, setState ] = useState({
    name:"",
    title: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({...state,
    [e.target.name]:e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:9292/pirates', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(state)
    })
      .then(resp => resp.json())
      .then(data => {
        setState(data)
        navigate('/pirates')
      })
  }
  return (
    <div className="new-pirate-container">
    <div style={{ fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 30}}>
      <h1>Add Pirate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input style={{ fontFamily: "fantasy", height: 35, width: 300, color:"#6991B3", fontSize: 30}} 
           type="text"
           placeholder='Name:'
           name="name"
           value={ state.name }
           onChange={handleChange} 
           autoFocus={true}></input>
        </div>
        <div>
          <input style={{ fontFamily: "fantasy", height: 35, width: 300, color:"#6991B3", fontSize: 30}} 
           type="text"
           placeholder='Title:'
           name="title"
           value={state.title}
           onChange={handleChange} 
           autoFocus={true}></input>
        </div>
        <br/>
        <input style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 150, fontSize: 18, backgroundColor: "#6991B3"}}type="submit" value="Create Pirate"/>
      </form>
    </div>
    </div>
  )
}

export default NewPirate