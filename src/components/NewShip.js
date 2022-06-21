import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NewShip = () => {
  const [ state, setState ] = useState({
    name: "",
    ship_type: "",
    ranking: "",
    status: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({...state,
    [e.target.name]:e.target.value })
  }
  
 const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:9292/ships", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
    },
        body: JSON.stringify(state)
    })
      .then(resp => resp.json())
      .then(data => {
        setState(data)
        navigate('/ships') 
  })
 }
  return (
    <div className='new-ship-container'>
    <div style={{ fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 30}}>
      <h1>Add Ship</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <input style={{fontFamily: "fantasy", height: 35, width: 350, fontSize: 30}}
           type="text"
           placeholder="Name:"
           name="name"
           value={ state.name }
           onChange={ handleChange }
           autoFocus={true}></input>
        </div>
        <div>
          <input style={{ fontFamily: "fantasy", height: 35, width: 350, fontSize: 30}} 
          placeholder="Class:"
          type="text" 
          name= "ship_type"
          value={ state.ship_type } 
          onChange={ handleChange } 
          autoFocus={true}></input>
        </div>
         <div>
          <input style={{ fontFamily: "fantasy", height: 35, width: 350, fontSize: 30}}
          placeholder="Ranking:" 
          type="text" 
          name="ranking"
          value={ state.ranking } 
          onChange={ handleChange } 
          autoFocus={true}></input>
        </div>
        <div>
          <input style={{fontFamily: "fantasy", height: 35, width: 350, fontSize: 30}}
          placeholder="Status:" 
          type="text"
          name="status"
          value={ state.status } 
          onChange={ handleChange } 
          autoFocus={true} />
        </div>
        <br/>
        <input style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 100, fontSize: 18, backgroundColor: "#6991B3"}} type="submit" value="Add Ship"/>
      </form>
    </div>
    </div>
  )
}

export default NewShip





  
  