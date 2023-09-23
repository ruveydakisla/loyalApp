import React from 'react';
import { Outlet, Link } from 'react-router-dom';
function LowerNavbar() {
  return (
    <div>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <button className="btnn btnRadius">My Wallet</button>
      </div>

      <br />
      <br />
      <div className="d-flex justify-content-center">
        <div
          className="low-navbar"
        >
          <nav  className="navbar-expand-lg navbar  custom-navbar justify-content-center">
            <ul
              className="navbar-nav ml-auto "
            >
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
      <br />
      <div className="justify-content-center  d-flex">
        <Outlet />
      </div>
    </div>
  );
}

export default LowerNavbar;
