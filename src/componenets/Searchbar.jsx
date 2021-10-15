import React from "react";
import "../assets/styles/searchbar.css";

function SearchBar() {
  return (
    <React.Fragment>
      <nav className="navbar searchbar-wrapper navbar-expand-lg navbar-light bg-light">
        <div className="row p-0 m-0 w-100">
          {/* search */}
          <div className="col-6 order-1 order-lg-2 searchbar-col-1 ">
            <div className="search-wrapper d-flex">
              <input
                type="text"
                id="search-text-box"
                placeholder="Type to search"
                aria-label="search box"
              />
              <button id="search-btn" aria-label="search">
                Search
              </button>
            </div>
          </div>
          {/* menu */}
          <div className="col-6 order-2 order-lg-1 searchbar-col-2 p-lg-0">
            <button
              className="navbar-toggler searchbar-toggler-div"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="custom-searchbar-icon navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Difficulty */}
                <li className="nav-item dropdown search-nav-item">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#difficulty"
                    id="difficulty"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Difficulty
                  </a>
                  <ul
                    className="dropdown-menu px-3"
                    aria-labelledby="difficulty"
                  >
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="level-easy"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="level-easy"
                        >
                          Easy
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="level-medium"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="level-medium"
                        >
                          Medium
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="level-hard"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="level-hard"
                        >
                          Hard
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="level-challenging"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="level-challenging"
                        >
                          Challenging
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Length */}
                <li className="nav-item dropdown search-nav-item">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#length"
                    id="length"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Length
                  </a>
                  <ul className="dropdown-menu px-3" aria-labelledby="length">
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="under-5km"
                        />
                        <label className="form-check-label" htmlFor="under-5km">
                          Under 5km
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="under-10km"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="under-10km"
                        >
                          Under 10km
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="under-20km"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="under-20km"
                        >
                          Under 20km
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="over-20km"
                        />
                        <label className="form-check-label" htmlFor="over-20km">
                          Over 20km
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Rating */}
                <li className="nav-item dropdown search-nav-item">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#length"
                    id="rating"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Rating
                  </a>
                  <ul className="dropdown-menu px-3" aria-labelledby="rating">
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="one-star"
                        />
                        <label className="form-check-label" htmlFor="one-star">
                          <i className="fas fa-star star"></i>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="two-star"
                        />
                        <label className="form-check-label" htmlFor="two-star">
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="three-star"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="three-star"
                        >
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="four-star"
                        />
                        <label className="form-check-label" htmlFor="four-star">
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="five-star"
                        />
                        <label className="form-check-label" htmlFor="five-star">
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                          <i className="fas fa-star star"></i>
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default SearchBar;
