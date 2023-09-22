import React from 'react'
import { Outlet, Link } from 'react-router-dom';
function LowerNavbar() {
  return (
    <div>
         <br />
      <br />
      <div  className='d-flex justify-content-center'>
        <button className="btnn btnRadius">My Wallet</button>
      </div>

      <br />
      <br />
      <div className="d-flex justify-content-center">
        <div  style={{alignItems:'center', width:'35%',textAlign:'center'}} >
          <nav className='navbar-expand-lg navbar  custom-navbar justify-content-center'>
            <ul style={{alignItems:'center', textAlign:'center'}} className="navbar-nav ml-auto ">
              <li className="nav-item">
                <Link to="./" className="nav-link custom-link ">
                  <li className="nav-link custom-link">Home</li>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="membership" className="nav-link custom-link">
                  <li className="nav-link custom-link">Membership</li>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="memorynft" className="nav-link custom-link">
                  <li className="nav-link custom-link">Memory NFT's</li>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="rewalds" className="nav-link custom-link">
                  <li className="nav-link custom-link">Rewalds</li>
                </Link>
              </li>
            </ul>
            
          </nav>
        </div>
    </div>
    <Outlet/>
    </div>
  )
};

export default LowerNavbar;