import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


const NewShip = ({ handleSubmit }) => {
  const [ formData, setFormData ] = useState({
    name: " ",
    shipType: " ",
    ranking: " ",
    status: " "
  });
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
 }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch('http://localhost:9292/ships', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "apllication/json"
  //     },
  //     body: JSON.stringify({ formData })
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       onAddShip(data)
  //       navigate('/ships')
  //     })
  // }

  

  return (
    <div style={{ fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 30}}>
      <h1>Add Ship</h1>
      <form onSubmit={(e) => handleSubmit(e, formData)} style={{flexDirection: "column"}}>
        <div>
          <ul>
          <label>Name: </label>
          <input style={{ fontFamily: "fantasy", height: 35, width: 250, fontSize: 30}}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoFocus={true} />
          </ul>
          <ul>
          <label>Ship Type: </label>
          <input style={{ fontFamily: "fantasy", height: 35, width: 250, fontSize: 30}} 
          type="text" 
          name= "shipType"
          value={formData.shipType} 
          onChange={handleChange} 
          autoFocus={true} />
          </ul>
          <ul>
          <label>Ranking: </label>
          <input style={{ fontFamily: "fantasy", height: 35, width: 250, fontSize: 30}} 
          type="text" 
          name="ranking"
          value={formData.ranking} 
          onChange={handleChange} 
          autoFocus={true} />
          </ul>
          <ul>
          <label>Status: </label>
          <input style={{ fontFamily: "fantasy", height: 35, width: 250, fontSize: 30}} 
          type="text"
          name="status"
          value={formData.status} 
          onChange={handleChange} 
          autoFocus={true} />
          </ul>
        </div>
        <br/>
        <input style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 100, fontSize: 18, backgroundColor: "#6991B3"}} type="submit" value="Add Ship"/>
      </form>
    </div>
  )
}

export default NewShip





  
  