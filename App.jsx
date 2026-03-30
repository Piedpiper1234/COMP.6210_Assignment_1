import "./components/scpTitle.css";
import SCPTitle from "./components/SCPTitle.jsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import SCP from "./SCP.jsx";
export default function App() {
  return (            
    <Router>
      <Nav />
      <SCPTitle />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/scp/:id" element={<SCP />} />
      </Routes>
    </Router>
  )

};

