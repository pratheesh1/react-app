import React from "react";
import "../../assets/styles/form/form.css";
import Pagination from "./Pagination";
import Cancel from "./Cancel";
import FormType from "./Form-Type";
import { useFormStore } from "../../store";

function Form4(props) {
  const {
    firstName,
    lastName,
    email,
    aboutYou,
    trailName,
    distance,
    difficultyLevel,
    timeToComplete,
    description,
    describeTrail,
    imageLink,
  } = useFormStore((state) => state.formData);

  const formPreviousPage = useFormStore((state) => state.formPreviousPage);
  const submitForm = useFormStore((state) => state.submitForm);

  //get difficulty level
  const getDifficultyLevel = () => {
    switch (difficultyLevel) {
      case "1":
        return "Easy";
      case "2":
        return "Medium";
      case "3":
        return "Hard";
      case "4":
        return "Challenging";
      default:
        return "";
    }
  };

  //create list of images
  const createList = () => {
    return imageLink.map((link, index) => (
      <p className="image-links-list m-0" key={index}>
        {link}
      </p>
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
                <Pagination page={4} />
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
                        <span className="p-0 m-0">
                          {firstName + " " + lastName}
                        </span>
                      </div>
                      <div className="p-0 m-0 py-lg-1 d-flex flex-row">
                        <p className="field-review m-0">email:</p>
                        <span className="p-0 m-0">{email}</span>
                      </div>
                      <div className="p-0 m-0 py-lg-1 d-flex flex-row">
                        <p className="field-review m-0">description:</p>
                        <span className="p-0 m-0">{aboutYou}</span>
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
                          <span className="p-0 m-0">{trailName}</span>
                        </div>
                        <div className="col-12 col-lg-6 m-0 p-0 py-lg-1 d-flex flex-row">
                          <p className="field-review m-0">distance:</p>
                          <span className="p-0 m-0">{distance}</span>
                        </div>
                      </div>
                      <div className="row p-0 m-0 d-flex flex-row">
                        <div className="col-12 col-lg-6 m-0 p-0 py-lg-1 d-flex flex-row">
                          <p className="field-review m-0">difficulty level:</p>
                          <span className="p-0 m-0">
                            {getDifficultyLevel()}
                          </span>
                        </div>
                        <div className="col-12 col-lg-6 m-0 p-0 py-lg-1 d-flex flex-row">
                          <p className="field-review m-0">
                            avg time for completion:
                          </p>
                          <span className="p-0 m-0">
                            {timeToComplete + " Hours"}
                          </span>
                        </div>
                      </div>
                      <div className="p-0 m-0 py-lg-1 d-flex flex-row">
                        <p className="field-review m-0">description:</p>
                        <span className="p-0 m-0">{description}</span>
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
                          <textarea
                            className="filed-input-xlarge"
                            value={describeTrail}
                            readOnly={true}
                          />
                          <span></span>
                        </div>
                      </div>
                      <div className="p-0 m-0 py-lg-1 d-flex flex-row">
                        <p className="field-review m-0">images:</p>
                        <span className="p-0 m-0">{createList()}</span>
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
                    data-bs-toggle="modal"
                    data-bs-target="#cancelModal"
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn my-2 btn-previous align-middle"
                    onClick={() => {
                      formPreviousPage();
                    }}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn my-2 btn-continue align-middle"
                    onClick={() => {
                      submitForm();
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cancel />
    </React.Fragment>
  );
}

export default Form4;
