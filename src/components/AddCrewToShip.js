import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AddCrewToShip = () => {
    const [state, setState] = useState({
        name:"",
        title:""
        })

    const { ship_id } = useParams()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setState({...state,
        [e.target.name]:e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/ships/${ship_id}/pirates`, {
          method: "POST",
          headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
    },
      body: JSON.stringify(state)
    })
      .then(resp => resp.json())
      .then(data => {
        setState(data)
        navigate(`/ships/${ship_id}`)
      })
  }

  return (
    <div className="new-crew-container">
    <div style={{ fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 30}}>
      <h1>Add Crew to Ship</h1>
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
           value={ state.title }
           onChange={handleChange} 
           autoFocus={true}></input>
        </div>
        <br/>
        <input style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 150, fontSize: 18, backgroundColor: "#6991B3"}}type="submit" value="Add Crew"/>
      </form>
    </div>
    </div>
  )
}

export default AddCrewToShip