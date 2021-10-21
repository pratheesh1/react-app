import React from "react";
import "../../assets/styles/form/form.css";
import Pagination from "./Pagination";
import Cancel from "./Cancel";
import FormType from "./Form-Type";
import { useFormStore } from "../../store";
import { useForm } from "react-hook-form";

function Form2(props) {
  const {
    trailName,
    country,
    difficultyLevel,
    distance,
    description,
    timeToComplete,
  } = useFormStore((state) => state.formData);
  const updateForm = useFormStore((state) => state.updateForm);
  const formNextPage = useFormStore((state) => state.formNextPage);
  const formPreviousPage = useFormStore((state) => state.formPreviousPage);

  const { register, handleSubmit, watch, error } = useForm();
  watch((data) => {
    for (const key in data) {
      updateForm(key, data[key]);
    }
  });

  const onContinue = (data) => {
    try {
      //form validation here
      setCountry(data.country);
      formNextPage();
    } catch (e) {
      console.log(e);
    }
  };

  const setCountry = (value) => {
    var slectedCountry = props.countries.find(
      (country) => country.country_id === parseInt(value)
    );
    updateForm("countryName", slectedCountry.country);
  };

  //create list of countries
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
        <form onSubmit={handleSubmit(onContinue)}>
          <div className="container form-wrapper">
            <div className="container from-content-wrapper">
              <div className="row p-0 m-0">
                {/* Heading */}
                <FormType type={props.type} />
                {/* non-responsive pagination */}
                <div className="row p-0 m-0 pagination">
                  <div className="row p-0 m-0"></div>
                  <Pagination page={2} />
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
                          {...register("trailName")}
                          className="filed-input-small"
                          placeholder="Trail name"
                          value={trailName}
                        />
                      </div>
                      <div className="col-12 col-lg-6 my-3 my-lg-0">
                        <p className="field-heading m-0">Country</p>
                        <select
                          {...register("country")}
                          className="filed-input-small"
                          value={country}
                        >
                          <option value="" disabled={true} defaultValue={true}>
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
                        <select
                          className="filed-input-small"
                          {...register("difficultyLevel")}
                          value={difficultyLevel}
                        >
                          <option value="" disabled={true} defaultValue={true}>
                            Select
                          </option>
                          <option value="1">Easy</option>
                          <option value="2">Medium</option>
                          <option value="3">Hard</option>
                          <option value="4">Challenging</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-6 my-3 my-lg-0">
                        <p className="field-heading m-0">distance (in km)</p>
                        <input
                          type="text"
                          {...register("distance")}
                          className="filed-input-small"
                          placeholder="8.5"
                          value={distance}
                        />
                      </div>
                    </div>
                    <div className="row p-0 m-0 my-lg-3 form-row">
                      <div className="col-12 col-lg-6 my-3 my-lg-0">
                        <p className="field-heading m-0">short description</p>
                        <textarea
                          {...register("description")}
                          value={description}
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
                          {...register("timeToComplete")}
                          className="filed-input-small"
                          placeholder="1.5"
                          value={timeToComplete}
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
                      type="submit"
                      className="btn my-2 btn-continue align-middle"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Cancel />
    </React.Fragment>
  );
}

export default Form2;
