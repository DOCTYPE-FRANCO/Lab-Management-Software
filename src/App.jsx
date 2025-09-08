import React from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./Header.jsx";
import Homepage from "./Homepage.jsx";
import Maintenance from "./Maintenance.jsx";
import Schoolsys from "./Schoolsys.jsx";
import Personal from "./Personal.jsx"
import Inventory from "./Inventory.jsx"

function App() {

  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/maintenance" element={<Maintenance/>}/>
          <Route path="/schoolsystem" element={<Schoolsys/>}/>
          <Route path="/personal" element={<Personal/>}/>
          <Route path="/inventory" element={<Inventory />}/>
          
        </Routes>
      </div>
    </div>
  );
}

export default App
