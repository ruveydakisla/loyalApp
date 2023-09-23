import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Memories from './Pages/Memories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Card from './components/Card';
import MemberShipCard from './components/MemberShipCard';
import Rewalds from './Pages/Rewalds';
import MemoryNFT from './Pages/MemoryNFT';
import Membership from './Pages/Membership';
import MemoryCard from './components/MemoryCard';
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <div className="switch">
          <Routes>
            <Route path="/Home" exact element={<Home />} />
            <Route path="/Memories" element={<Memories />}>
            
              <Route path="membership" element={<Membership />} />
              <Route path="memorynft" element={<MemoryNFT />} />
              <Route path="rewalds" element={<Rewalds />} />
              
            </Route>
            <Route path="/Card" element={<Card />} />
            <Route path="memocard" element={<MemoryCard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
