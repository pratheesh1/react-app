import React from "react";
import "../assets/styles/searchbar.css";

function SearchBar() {
  return (
    <React.Fragment>
      <nav className="navbar searchbar-wrapper navbar-expand-lg navbar-light bg-light">
        <div className="row p-0 m-0 w-100">
          <div className="col-6 order-1 order-lg-2 bg-primary searchbar-col-1">
            Two
          </div>
          <div className="col-6 order-2 order-lg-1 searchbar-col-2">
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
                <li className="nav-item dropdown">
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
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="level-easy"
                        />
                        <label class="form-check-label" for="level-easy">
                          Easy
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="level-medium"
                        />
                        <label class="form-check-label" for="level-medium">
                          Medium
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="level-hard"
                        />
                        <label class="form-check-label" for="level-hard">
                          Hard
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="level-challenging"
                        />
                        <label class="form-check-label" for="level-challenging">
                          Challenging
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Length */}
                <li className="nav-item dropdown">
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
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="under-5km"
                        />
                        <label class="form-check-label" for="under-5km">
                          Under 5km
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="under-10km"
                        />
                        <label class="form-check-label" for="under-10km">
                          Under 10km
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="under-20km"
                        />
                        <label class="form-check-label" for="under-20km">
                          Under 20km
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="over-20km"
                        />
                        <label class="form-check-label" for="over-20km">
                          Over 20km
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
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
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="one-star"
                        />
                        <label class="form-check-label" for="one-star">
                          <i class="fas fa-star star"></i>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="two-star"
                        />
                        <label class="form-check-label" for="two-star">
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="three-star"
                        />
                        <label class="form-check-label" for="three-star">
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="four-star"
                        />
                        <label class="form-check-label" for="four-star">
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="five-star"
                        />
                        <label class="form-check-label" for="five-star">
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
                          <i class="fas fa-star star"></i>
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
