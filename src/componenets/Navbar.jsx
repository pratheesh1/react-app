import React from "react";
import "../assets/styles/navbar.css";
import logo from "../assets/images/brand-logo.png";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-wrapper navbar-expand-lg navbar-light bg-light">
        {/* Navbar toogle */}
        <div className="col-4 ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="custom-navbar-icon navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active p-2"
                  aria-current="page"
                  href="#explore"
                >
                  Explore
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle p-2"
                  href="#account"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item disabled" href="#activities">
                      Activities
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item disabled" href="completed">
                      Completed
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item disabled" href="stats">
                      Stats
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active p-2" href="#hiking-gear">
                  Hiking Gear
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4 d-flex flex-row justify-content-center">
          <div className="navbar-brand navbar-brand-wrapper">
            <img id="navbar-logo" src={logo} aria-label="logo" />
            <span id="navbar-logo-text">Trails</span>
          </div>
        </div>
        <div className="col-4 d-flex flex-row justify-content-end align-middle">
          OK
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
