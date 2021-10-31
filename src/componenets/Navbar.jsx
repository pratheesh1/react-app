import React from "react";
import "../assets/styles/navbar.css";
import logo from "../assets/images/brand-logo.png";
import { useGlobalStore, useFormStore, useSearchStore } from "../store";
import { openInNewTab } from "../utils";

function NavBar() {
  //get state values and functions from different stores
  const setPage = useGlobalStore((state) => state.setPage);
  const formReset = useFormStore((state) => state.formReset);
  const resetSearch = useSearchStore((state) => state.resetSearch);

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
                  <button
                    className="btn nav-link active p-2 px-lg-5"
                    aria-current="page"
                    onClick={() => {
                      setPage("browseTrails");
                      formReset();
                    }}
                  >
                    Explore
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className=" btn nav-link active p-2 px-lg-4"
                    onClick={() =>
                      openInNewTab("https://www.amazon.com/s?k=skiing+gear")
                    }
                  >
                    Hiking Gear
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* logo */}
          <div className="col-4 d-flex justify-content-center">
            <div
              className="navbar-brand navbar-brand-wrapper"
              role="button"
              onClick={() => {
                setPage("main");
                formReset();
                resetSearch();
              }}
            >
              <img id="navbar-logo" src={logo} aria-label="logo" />
              <span id="navbar-logo-text">Trails</span>
            </div>
          </div>
          {/* buttons */}
          <div className="button-wrapper col-4 d-flex flex-row justify-content-end">
            <button className="btn btn-help mx-1 mx-lg-4" aria-disabled="true">
              Help
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
