import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,// Burada etiketi kısaltmak amacıyla böyle yazmış.
    Switch,
    Route,
    Link
    } from "react-router-dom" ;
import Home from '../Pages/Home';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">LoyalApp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item  ">
            <Link to='/Home' className="nav-link" style={{textDecoration:'none'}}>
                <li >Home</li>
            </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link"to='/Memories'>
                <li>Memories</li>
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
