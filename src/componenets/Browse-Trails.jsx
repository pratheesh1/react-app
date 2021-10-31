import React, { useEffect } from "react";
import "../assets/styles/browsetrails.css";
import TrailCard from "../componenets/trail-card/Trail-Card";
import {
  useTrailStore,
  useGlobalStore,
  useFormStore,
  useSearchStore,
} from "../store";
import { filterTrailData, sortTrailData } from "../utils";

export default function BrowseTrails() {
  //get state values and functions from different stores
  const { setTrailsData, setSortedData, trailsData, numberOfTrails } =
    useTrailStore();
  const setPage = useGlobalStore((state) => state.setPage);
  const setFormType = useFormStore((state) => state.setFormType);
  const { updateSearch, show, sort } = useSearchStore();

  //fetch data and subscribe to state changes
  useEffect(() => {
    if (!trailsData.length) {
      setTrailsData();
    }
  }, []);

  //generate trail cards
  const generateTrailsCard = () => {
    return trailsData.map((trail) => (
      <TrailCard key={trail._id} trail={trail} />
    ));
  };

  return (
    <div className=" browse-trail-wrapper">
      <div className="row p-0 m-0">
        {/* Left side */}
        <div className="col-6 px-xxl-5 my-1">
          <p className="row p-0 m-0">{numberOfTrails} results</p>
          <span className="d-none d-lg-inline-block p-0 m-0">
            Did not find what you were looking for?
          </span>
          <span className="p-0 m-0 text-decoration-underline">
            <button
              className="btn p-0 m-0 mx-lg-2 text-decoration-underline"
              onClick={() => {
                setPage("form");
                setFormType("add");
              }}
            >
              Add new trail
            </button>
          </span>
        </div>
        {/* Right side */}
        {/* Buttons for filtering/sorting */}
        <div className="col-6 px-xxl-5 my-1">
          <div className="d-md-flex justify-content-end">
            <div className="row col-md-5 col-xl-8 m-0">
              <div className="dropdown d-flex justify-content-end m-0 p-0">
                <span
                  className=" dropdown-toggle"
                  type="button"
                  id="contentTypeDropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  SHOW: {show}
                </span>
                <div
                  className="dropdown-menu"
                  aria-labelledby="contentTypeDropdown"
                >
                  <p
                    className="dropdown-item m-0"
                    onClick={async () => {
                      await setTrailsData();
                      updateSearch("show", "All Content");
                    }}
                  >
                    All Content
                  </p>
                  <p
                    className="dropdown-item m-0"
                    onClick={async () => {
                      await setTrailsData();
                      setSortedData(filterTrailData([...trailsData], "photo"));
                      updateSearch("show", "With Photos Only");
                    }}
                  >
                    With Photos Only
                  </p>
                  <p
                    className="dropdown-item m-0"
                    onClick={async () => {
                      await setTrailsData();
                      setSortedData(filterTrailData([...trailsData], "review"));
                      updateSearch("show", "With Review Only");
                    }}
                  >
                    With Review Only
                  </p>
                </div>
              </div>
            </div>
            <div className="row col-md-7 col-xl-4 m-0">
              <div className="dropdown d-flex justify-content-end m-0 p-0">
                <span
                  className=" dropdown-toggle"
                  type="button"
                  id="contentRelevanceDropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  SORT BY: {sort}
                </span>
                <div
                  className="dropdown-menu"
                  aria-labelledby="contentRelevanceDropdown"
                >
                  <p
                    className="dropdown-item m-0"
                    onClick={() => {
                      setSortedData(sortTrailData([...trailsData], ""));
                      updateSearch("sort", "No Sort");
                    }}
                  >
                    No Sort
                  </p>
                  <p
                    className="dropdown-item m-0"
                    onClick={() => {
                      setSortedData(
                        sortTrailData([...trailsData], "completionTime")
                      );
                      updateSearch("sort", "Time");
                    }}
                  >
                    Est. Completion Time
                  </p>
                  <p
                    className="dropdown-item m-0"
                    onClick={() => {
                      setSortedData(sortTrailData([...trailsData], "review"));
                      updateSearch("sort", "Review");
                    }}
                  >
                    Review
                  </p>
                  <p
                    className="dropdown-item m-0"
                    onClick={() => {
                      setSortedData(
                        sortTrailData([...trailsData], "difficulty")
                      );
                      updateSearch("sort", "Difficulty");
                    }}
                  >
                    Difficulty
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0 d-flex justify-content-between">
        <div className="">
          <div
            className="
          row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-5 g-xxl-3"
          >
            {generateTrailsCard()}
          </div>
        </div>
      </div>
    </div>
  );
}
