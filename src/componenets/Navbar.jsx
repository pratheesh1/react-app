import React from "react";
import "../assets/styles/navbar.css";
import logo from "../assets/images/brand-logo.png";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-wrapper navbar-expand-lg navbar-light bg-light">
        {/* Navbar toogle */}
        <div className="row d-flex flex-row w-100 navbar-toggle-wrapper">
          <div className="col-4 p-0">
            <button
              className="navbar-toggler navbar-toggler-div"
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
                    className="nav-link active p-2 px-5"
                    aria-current="page"
                    href="#explore"
                  >
                    Explore
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active p-2 px-4" href="#hiking-gear">
                    Hiking Gear
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* logo */}
          <div className="col-4 d-flex justify-content-center">
            <div className="navbar-brand navbar-brand-wrapper">
              <img id="navbar-logo" src={logo} aria-label="logo" />
              <span id="navbar-logo-text">Trails</span>
            </div>
          </div>
          {/* buttons */}
          <div className="button-wrapper col-4 d-flex flex-row justify-content-end">
            <button
              className="btn btn-help mx-4"
              href="#help"
              aria-disabled="true"
            >
              Help
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
