import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Memories from './Pages/Memories';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Card from './components/Card';
export default function App() {
  return (
    <div>
      <Router>
        
       <Navbar/>
       
        <div className="switch">
          <Routes>
            <Route path="/Home" exact element={<Home />} />
            <Route path="/Memories" element={<Memories />} />
            <Route path="/Card" element={<Card />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
