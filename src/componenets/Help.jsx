import React from "react";
import "../assets/styles/help.css";
import { useGlobalStore } from "../store";

export default function Help() {
  //get state values and functions from different stores
  const setPage = useGlobalStore((state) => state.setPage);

  return (
    <div>
      <div className="help-container container position-relative">
        <div className="row">
          <div className="col-md-12 mt-4">
            <h2 className="help-page-heading mb-0 pb-0">Help</h2>
            <p className="help-page-text mt-0 pt-0">
              This section provies help and guide on getting around using the
              Trail App:
            </p>
            <p className="fw-lighter">
              Click on the <span className="fw-bold text-primary">Help</span>{" "}
              button on the top right corner to view this page.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5 className="help-page-heading">Navigating Home Page:</h5>
            <p className="help-page-text">
              <ul>
                <li>
                  Clicking on the "Trails" logo will take you to the Trails home
                  page.
                </li>
                <li>
                  Clicking on any of the "Trails" will take you to a detailed
                  page.
                </li>
                <li>Type in the search bar to search for trails.</li>
                <li>
                  Click on "Explore More" to see all the trails in the database.
                </li>
                <li>
                  Click on any of the activities to see the trails is associated
                  with that activity.
                </li>
                <li>
                  Click on "Read More" to see all the trails in the database.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5 className="help-page-heading">
              Navigating Browse Trails Page:
            </h5>
            <p className="help-page-text">
              <ul>
                <li>
                  Clicking on any of the "Trails" will take you to a detailed
                  page.
                </li>
                <li>Type in the search bar to search for trails.</li>
                <li>
                  Use "Difficulty", "Distance" and "SHOW" to filter the trails.
                  Use "SORT BY" to sort the trails.
                </li>
                <li>
                  Click on "Ads new trail" to add a new trail to the database.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5 className="help-page-heading">Navigating Detail View Page:</h5>
            <p className="help-page-text">
              <ul>
                <li>Type in the search bar to search for trails.</li>
                <li>
                  Click on "Home Button" with-in the main image to go back to
                  the browse page.
                </li>
                <li>Click on the "Edit Button" to edit the trail.</li>
                <li>Click on the "Delete Button" to delete the trail.</li>
                <li>Use the form below to leave a review on the trail.</li>
                <li>
                  Click on "Past Review" or "Photos" to switch between review
                  and photos.
                </li>
                <li>Click on "Upload" to add a photo to the trail.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5 className="help-page-heading">Navigating Forms:</h5>
            <p className="help-page-text">
              <ul>
                <li>
                  All forms cannot be continued without filling out all the
                  required fields.
                </li>
                <li>
                  Clicking on "Submit" will submit the form and add the trail to
                  the database.
                </li>
                <li>
                  Clicking on "Cancel" will cancel the form and go back to the
                  browse page.
                </li>
                <li>
                  Clicking on "Continue" will continue to the next page of the
                  form.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="position-absolute btn-help-back">
        <button
          className="btn btn-primary btn-help-back"
          onClick={() => {
            setPage("browseTrails");
          }}
        >
          Back <i className="fas fa-arrow-left"></i>
        </button>
      </div>
    </div>
  );
}
