import React from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./Header.jsx";
import Homepage from "./Homepage.jsx";
import Maintenance from "./Maintenance.jsx";
import Schoolsys from "./Schoolsys.jsx";
import Personal from "./Personal.jsx"
import Inventory from "./Inventory.jsx"
import Service from "./Service.jsx"
import Lab2 from "./Lab2.jsx";

function App() {

  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/services" element={<Service/>}/>
          <Route path="/maintenance" element={<Maintenance/>}/>
          <Route path="/schoolsystem" element={<Schoolsys/>}/>
          <Route path="/personal" element={<Personal/>}/>
          <Route path="/inventory" element={<Inventory />}/>
          <Route path="/lab2" element={<Lab2 />}/>
          
        </Routes>
      </div>
    </div>
  );
}

export default App
