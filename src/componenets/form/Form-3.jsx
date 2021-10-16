import React from "react";
import "../../assets/styles/form/form.css";
import Pagination from "./Pagination";
import MyDropzone from "./File-Upload";

function Form3() {
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
                <Pagination page={"page3"} />
                <hr className="bg-secondary form-hr" />
              </div>
              <div className="row p-0 m-0">
                {/* Form */}
                <div className="col-12 p-0">
                  <div className="row p-0 m-0 my-lg-3 form-row">
                    <div className="col-12 my-3 my-lg-0">
                      <p className="field-heading m-0">describe the trail</p>
                      <textarea
                        className="filed-input-xlarge"
                        placeholder="Detailed post on the trail"
                      />
                    </div>
                  </div>
                  <div className="row p-0 m-0 my-lg-3 form-row">
                    <div className="col-12 my-1 my-lg-0">
                      <div className="row m-0 p-0">
                        <p className="field-heading m-0 p-0 my-lg-2">
                          Upload image
                        </p>
                        <div className="col-12 col-lg-7 p-0 upload-wrapper">
                          {/* File upload */}
                          <MyDropzone />
                        </div>
                        <div className="col-12 col-lg-5 p-0 d-flex d-lg-block">
                          <div className="col-6 col-lg-12 px-lg-3">
                            <button
                              type="button"
                              className="btn btn-previous btn-choose-file align-middle px-0"
                            >
                              Choose File
                            </button>
                          </div>
                          <div className="col-6 col-lg-12 px-lg-3 d-flex d-md-block justify-content-end">
                            <button
                              type="button"
                              className="btn my-lg-2 btn-discard align-middle"
                            >
                              Discard File
                            </button>
                          </div>
                        </div>
                      </div>
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

export default Form3;
