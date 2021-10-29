import React, { useEffect } from "react";
import "../assets/styles/searchbar.css";
import { useTrailStore, useSearchStore, useGlobalStore } from "../store";
import { useForm } from "react-hook-form";

function SearchBar() {
  //get state values and functions from different stores
  const { search, difficulty, distance, updateSearch } = useSearchStore();
  const { register, handleSubmit, watch } = useForm();
  const { setTrailsData } = useTrailStore();
  const { setPage, currentPage } = useGlobalStore();

  //watch for input value changes and update state
  watch((data) => {
    for (const key in data) {
      updateSearch(key, data[key] ? data[key] : "");
    }
  });

  // update data when user selection changes and only if page is browseTrails
  var params = {};
  if (currentPage === "browseTrails") {
    params.difficulty = difficulty;
    params.distance = distance;
    params.q = search;
  }
  useEffect(() => {
    setTrailsData(params);
  }, [params.difficulty, params.distance]);

  //onsubmit callback function
  const performSearch = () => {
    if (search) {
      setPage("browseTrails");
      setTrailsData({ q: search });
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(performSearch)}>
        <nav className="navbar searchbar-wrapper navbar-expand-lg navbar-light bg-light">
          <div className="row p-0 m-0 w-100">
            {/* search */}
            <div className="col-6 order-1 order-lg-2 searchbar-col-1 ">
              <div className="search-wrapper d-flex">
                <input
                  {...register("search")}
                  type="text"
                  id="search-text-box"
                  placeholder="Type to search"
                  aria-label="search box"
                />
                <button id="search-btn" aria-label="search" type="submit">
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
                      className={`nav-link dropdown-toggle mx-lg-5 ${
                        currentPage === "browseTrails" ? "active" : "disabled"
                      }`}
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
                            value="1"
                            id="level-easy"
                            {...register("difficulty")}
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
                            value="2"
                            id="level-medium"
                            {...register("difficulty")}
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
                            value="3"
                            id="level-hard"
                            {...register("difficulty")}
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
                            value="4"
                            id="level-challenging"
                            {...register("difficulty")}
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
                  {/* Distance */}
                  <li className="nav-item dropdown search-nav-item">
                    <a
                      className={`nav-link dropdown-toggle ${
                        currentPage === "browseTrails" ? "active" : "disabled"
                      }`}
                      href="#distance"
                      id="distance"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Distance
                    </a>
                    <ul
                      className="dropdown-menu px-3"
                      aria-labelledby="distance"
                    >
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="0,5"
                            id="under-5km"
                            {...register("distance")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="under-5km"
                          >
                            Under 5km
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="5,10"
                            id="under-10km"
                            {...register("distance")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="under-10km"
                          >
                            5 to 10km
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="10,20"
                            id="under-20km"
                            {...register("distance")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="under-20km"
                          >
                            10 to 20km
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="20,999999"
                            id="over-20km"
                            {...register("distance")}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="over-20km"
                          >
                            Over 20km
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
      </form>
    </React.Fragment>
  );
}

export default SearchBar;
