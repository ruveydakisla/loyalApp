import React from 'react';
import {
  BrowserRouter as Router, // Burada etiketi kısaltmak amacıyla böyle yazmış.
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
import Home from './Home';
import MemoryNFT from './MemoryNFT';
function Memories() {
  return (
    <div className="container-fluid ">
      <br />
      <br />
      <div>
        <button className="btnn btnRadius">My Wallet</button>
      </div>

      <br />
      <br />
      <div className="d-flex">
        <button className="btnn">
          <Link to="/Memories/home" className="nav-link">
            <li className="nav-link">Home</li>
          </Link>
        </button>
        <button className="btnn">
          <Link to="./memorynft" className="nav-link">
            <li className="nav-link">Memory NFT's</li>
          </Link>
        </button>
        <button className="btnn">
          <Link to="./" className="nav-link">
            <li className="nav-link">Rewalds</li>
          </Link>
        </button>
        <div>
          <Routes>
            <Route path="/Memories/home" exact element={<Home />} />
            <Route path="./" exact element={<MemoryNFT />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Memories;
