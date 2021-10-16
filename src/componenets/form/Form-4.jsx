import React from "react";
import "../../assets/styles/form/form.css";
import Pagination from "./Pagination";

function Form4() {
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
                <Pagination page={"page4"} />
                <hr className="bg-secondary form-hr" />
              </div>
              <div className="row p-0 m-0">
                {/* Form */}
                <div className="col-12 p-0">
                  {/* about you */}
                  <div className="row p-0 m-0 my-lg-3">
                    <div className="col-12 col-lg-2 order-2 order-lg-1 m-0 d-flex align-items-end">
                      <p className="field-heading m-0">about you</p>
                    </div>
                    <div className="col-12 col-lg-10 order-1 order-lg-2 py-0 m-0">
                      <div className="p-0 m-0 py-lg-1 d-flex flex-row">
                        <p className="field-review m-0">name:</p>
                        {/* TODO: name here */}
                        <span className="p-0 m-0">John Smith</span>
                      </div>
                      <div className="p-0 m-0 py-lg-1 d-flex flex-row">
                        <p className="field-review m-0">email:</p>
                        {/* TODO: emial here */}
                        <span className="p-0 m-0">johnsmith@gemail.com</span>
                      </div>
                      <div className="p-0 m-0 py-lg-1 d-flex flex-row">
                        <p className="field-review m-0">description:</p>
                        {/* TODO: description here */}
                        <span className="p-0 m-0">
                          {" "}
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Molestias iusto libero quis ad quod hic aliquid
                          eos cumque perferendis qui? Dolorem, ad laboriosam!
                          Nobis, voluptates quaerat. A eveniet at dicta
                          laudantium adipisci sit cumque.
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr className="p-0 m-0 review-hr" />
                  {/* trail */}
                  <div className="row p-0 m-0 my-lg-3 form-row">
                    <div className="col-12 col-lg-2 order-2 order-lg-1 m-0 d-flex align-items-end">
                      <p className="field-heading m-0">trail</p>
                    </div>
                    <div className="col-12 col-lg-10 order-1 order-lg-2 py-0 m-0">
                      <div className="row p-0 m-0 d-flex flex-row">
                        <div className="col-12 col-lg-6 m-0 p-0 py-lg-1 d-flex flex-row">
                          <p className="field-review m-0">name:</p>
                          {/* TODO: name here */}
                          <span className="p-0 m-0">BC Hiking trail</span>
                        </div>
                        <div className="col-12 col-lg-6 m-0 p-0 py-lg-1 d-flex flex-row">
                          <p className="field-review m-0">distance:</p>
                          {/* TODO: name here */}
                          <span className="p-0 m-0">10.2km</span>
                        </div>
                      </div>
                      <div className="row p-0 m-0 d-flex flex-row">
                        <div className="col-12 col-lg-6 m-0 p-0 py-lg-1 d-flex flex-row">
                          <p className="field-review m-0">difficulty level:</p>
                          {/* TODO: name here */}
                          <span className="p-0 m-0">Hard</span>
                        </div>
                        <div className="col-12 col-lg-6 m-0 p-0 py-lg-1 d-flex flex-row">
                          <p className="field-review m-0">
                            avg time for completion:
                          </p>
                          {/* TODO: name here */}
                          <span className="p-0 m-0">1.2 Hours</span>
                        </div>
                      </div>
                      <div className="p-0 m-0 py-lg-1 d-flex flex-row">
                        <p className="field-review m-0">description:</p>
                        {/* TODO: description here */}
                        <span className="p-0 m-0">
                          {" "}
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Molestias iusto libero quis ad quod hic aliquid
                          eos cumque perferendis qui? Dolorem, ad laboriosam!
                          Nobis, voluptates quaerat. A eveniet at dicta
                          laudantium adipisci sit cumque.
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr className="p-0 m-0 review-hr" />
                  {/* trail details */}
                  <div className="row p-0 m-0 my-lg-3">
                    <div className="col-12 col-lg-2 order-2 order-lg-1 m-0 d-flex align-items-end">
                      <p className="field-heading m-0">trail details</p>
                    </div>
                    <div className="col-12 col-lg-10 order-1 order-lg-2 py-0 m-0">
                      <div className="row p-0 m-0 d-flex flex-row">
                        <div className="col-12 col-lg-1 m-0 p-0 py-lg-1 d-flex flex-row">
                          <p className="field-review m-0">description:</p>
                        </div>
                        <div className="col-12 col-lg-11 m-0 p-0 py-lg-1 d-flex flex-row">
                          {/* TODO: text here */}
                          <textarea className="filed-input-xlarge" value={""} />
                          <span></span>
                        </div>
                      </div>
                      <div className="p-0 m-0 py-lg-1 d-flex flex-row">
                        <p className="field-review m-0">description:</p>
                        {/* TODO: description here */}
                        <span className="p-0 m-0">Image-of-trail.png</span>
                      </div>
                    </div>
                  </div>
                  <hr className="p-0 m-0 review-hr" />
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
                    Confirm
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

export default Form4;
