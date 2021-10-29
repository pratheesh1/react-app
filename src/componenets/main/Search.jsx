import React from "react";
import "../../assets/styles/main/main.css";
import { useGlobalStore, useSearchStore, useTrailStore } from "../../store";

export default function Search() {
  //get state values and functions from different stores
  const setPage = useGlobalStore((state) => state.setPage);
  const { setTrailsData } = useTrailStore();
  const { search, updateSearch } = useSearchStore();

  return (
    <div className="hero-wrapper">
      <div className="col">
        <div className="row">
          <div className="col d-flex align-middle justify-content-center my-2 my-md-3 my-lg-5">
            <p className="hero-text p-0 m-0">Find your next adventure</p>
          </div>
        </div>
        <div className="hero-search-wrapper row">
          <div className="col d-flex align-middle justify-content-center">
            <div
              className="row
              hero-search position-relative"
            >
              <input
                type="text"
                className="hero-search-input"
                placeholder="Type to search"
                value={search}
                name="search"
                onChange={(e) => updateSearch(e.target.name, e.target.value)}
              ></input>
              <i className="fas fa-search font-awesome-search position-absolute"></i>
              <i
                className="fas fa-arrow-circle-right font-awesome-search-btn position-absolute"
                role="button"
                onClick={() => {
                  setPage("browseTrails");
                  setTrailsData({ q: search });
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="row">
          <p
            className="hero-subtext d-flex align-middle justify-content-center py-3"
            role="button"
            onClick={() => {
              setPage("browseTrails");
            }}
          >
            Explore More
          </p>
        </div>
      </div>
    </div>
  );
}
