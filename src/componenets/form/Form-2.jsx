import React from "react";
import "../../assets/styles/form/form.css";
import Pagination from "./Pagination";
import FormType from "./Form-Type";

function Form2(props) {
  //craete list of countries
  const createList = (countries) => {
    return countries.map((country) => (
      <option key={country.country_id} value={country.country_id}>
        {country.country}
      </option>
    ));
  };

  return (
    <React.Fragment>
      <div className="row w-100 p-0 m-0">
        <div className="container form-wrapper">
          <div className="container from-content-wrapper">
            <div className="row p-0 m-0">
              {/* Heading */}
              <FormType type={props.type} />
              {/* non-responsive pagination */}
              <div className="row p-0 m-0 pagination">
                <div className="row p-0 m-0"></div>
                <Pagination page={"page2"} />
                <hr className="bg-secondary form-hr" />
              </div>
              <div className="row p-0 m-0">
                {/* Form */}
                <div className="col-12 p-0">
                  <div className="row p-0 m-0 my-lg-3 form-row">
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">trail name</p>
                      <input
                        type="text"
                        className="filed-input-small"
                        placeholder="Trail name"
                      />
                    </div>
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">Country</p>
                      <select className="filed-input-small" defaultValue="">
                        <option value="" disabled={true}>
                          Select
                        </option>
                        {/* countries list */}
                        {createList(props.countries)}
                      </select>
                    </div>
                  </div>
                  <div className="row p-0 m-0 my-lg-3 form-row">
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">difficulty level</p>
                      <select className="filed-input-small" defaultValue="">
                        <option value="" disabled={true}>
                          Select
                        </option>
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                        <option value="4">Challenging</option>
                      </select>
                    </div>
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">distance (in m)</p>
                      <input
                        type="text"
                        className="filed-input-small"
                        placeholder="800.5"
                      />
                    </div>
                  </div>
                  <div className="row p-0 m-0 my-lg-3 form-row">
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">short description</p>
                      <textarea
                        className="filed-input-large"
                        placeholder="This trail is fantastic for anyone looking to get into the more challenging routes ...."
                      />
                    </div>
                    <div className="col-12 col-lg-6 my-3 my-lg-0">
                      <p className="field-heading m-0">
                        avg. time for completion (in hours)
                      </p>
                      <input
                        type="text"
                        className="filed-input-small"
                        placeholder="1.5"
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

export default Form2;
