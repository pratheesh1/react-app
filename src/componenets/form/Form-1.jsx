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
              {/* Buttons */}
              <div className="row p-0 m-0">
                {/* TODO: Start here with buttons */}
                <div class="col-12 col-md-6 bg-success">Hello</div>
                <div class="col-12 col-md-6 bg-warning">Hello</div>
              </div>
              <div className="row m-0">
                <div class="col-6 d-flex justify-content-start">
                  <button
                    type="button"
                    class="btn my-2 btn-cancel align-middle"
                  >
                    Cancel
                  </button>
                </div>
                <div class="col-6 d-flex justify-content-end">
                  <button
                    type="button"
                    class="btn my-2 btn-previous align-middle"
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
