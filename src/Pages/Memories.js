import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import MemoryNFT from './MemoryNFT';
import LowerNavbar from '../components/LowerNavbar';
import Rewalds from './Rewalds';
import Membership from './Membership';
import 'bootstrap/dist/css/bootstrap.min.css';
function Memories() {
  return (
    <div className="container-fluid  ">
      <LowerNavbar />
      <Routes>
        <Route path="/Memories" element={<Memories />}>
          <Route path="membership" element={<Membership />} />
          <Route path="memorynft" element={<MemoryNFT />} />
          <Route path="rewalds" element={<Rewalds />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Memories;
