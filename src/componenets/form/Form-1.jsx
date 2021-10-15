import React from "react";
import "../../assets/styles/form/form.css";
import "../../assets/styles/form/form-1.css";
import Pagination from "./Pagination";

function Form1() {
  return (
    <React.Fragment>
      <div className="row w-100 p-0 m-0">
        <div className="container form-wrapper">
          <div className="container from-content-wrapper">
            <div className="row p-0 m-0">
              {/* Heading */}
              <div className="row m-0 p-0 form-heading">
                <h2>Add New Trail</h2>
                <p className="form-subheading">
                  This form allows you to add a new trail to the website.
                </p>
              </div>
              {/* non-responsive pagination */}
              <div className="row p-0 m-0 pagination">
                <div className="row p-0 m-0"></div>
                <Pagination page={"page1"} />
                <hr className="bg-secondary form-hr" />
              </div>
              <div className="row p-0 m-0">
                {/* Form */}
                <div className="col-12 p-0">
                  <div className="row p-0 m-0 my-lg-3 form-row">
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">first name</p>
                      <input
                        type="text"
                        className="filed-input-small"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">last name</p>
                      <input
                        type="text"
                        className="filed-input-small"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="row p-0 m-0 my-lg-3 form-row">
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">email</p>
                      <input
                        type="text"
                        className="filed-input-small"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                  <div className="row p-0 m-0 my-lg-3 form-row">
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">
                        tell us more about you
                      </p>
                      <textarea
                        className="filed-input-large"
                        placeholder="I am very into hiking and trail running. I enjoy connecting with..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-0">
                {/* Buttons */}
                <div className="col-6 d-flex justify-content-start">
                  <button
                    type="button"
                    className="btn my-2 btn-cancel align-middle"
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn my-2 btn-previous align-middle"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn my-2 btn-continue align-middle"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Form1;
