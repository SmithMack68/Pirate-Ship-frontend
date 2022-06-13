import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const NewShip = ({ onAddShip}) => {
  const [ formData, setFormData ] = useState({
    name: "",
    shipType: "",
    ranking: "",
    status: ""
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]:e.target.value});
    console.log(formData)
 }

 const handleSubmit = (e) => {
    e.preventDefault()

    const newShip = {
      ...formData,
    }
    console.log(newShip)
     
    fetch('http://localhost:9292/ships', {
      method: "POST",
      headers: {
        "Content-Type": "apllication/json",
      },
      body: JSON.stringify(newShip),
    })
      .then(resp => resp.json())
      .then(data => onAddShip(data.newShip))
      
        navigate('/ships')
      
  }

  return (
    <div className='new-ship-container'>
    <div style={{ fontFamily: "fantasy", textAlign: "center", color:"#6991B3", fontSize: 30}}>
      <h1>Add Ship</h1>
      <form onSubmit={handleSubmit} style={{flexDirection: "column"}}>
        <div>
          <input style={{fontFamily: "fantasy", height: 35, width: 350, fontSize: 30}}
          type="text"
          placeholder="Name:"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        </div>
        <div>
          <input style={{ fontFamily: "fantasy", height: 35, width: 350, fontSize: 30}} 
          placeholder="Ship Type:"
          type="text" 
          name= "shipType"
          value={formData.shipType} 
          onChange={handleChange} 
         />
        </div>
         <div>
           <label></label>
          <input style={{ fontFamily: "fantasy", height: 35, width: 350, fontSize: 30}}
          placeholder="Ranking:" 
          type="text" 
          name="ranking"
          value={formData.ranking} 
          onChange={handleChange} 
        />
        </div>
        <div>
          <input style={{fontFamily: "fantasy", height: 35, width: 350, fontSize: 30}}
          placeholder="Status:" 
          type="text"
          name="status"
          value={formData.status} 
          onChange={handleChange} 
          />
        </div>
        <br/>
        <input style={{ fontFamily: "fantasy", textAlign: "center", color:"black", height: 29, width: 100, fontSize: 18, backgroundColor: "#6991B3"}} type="submit" value="Add Ship"/>
      </form>
    </div>
    </div>
  )
}

export default NewShip





  
  