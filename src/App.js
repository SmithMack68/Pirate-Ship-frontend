import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ShipList from './components/ShipList';
import NewShip from './components/NewShip';
import PirateList from './components/PirateList';
import NewPirate from './components/NewPirate';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import AddCrewToShip from './components/AddCrewToShip';
import ShipDetails from './components/ShipDetails';


const App = () => {
  
  

  return (
    <Router>
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/ships" element={<ShipList />} />
          <Route path="/ships/new" element={<NewShip />} />
          <Route path="/ships/:id" element={<ShipDetails />} />
          <Route path="/pirates" element={<PirateList />} />
          <Route path="/pirates/new" element={<NewPirate />} />
          <Route path="/ships/:ship_id/pirates/crew" element={<AddCrewToShip />} />
          <Route path='*' element={ <PageNotFound />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
