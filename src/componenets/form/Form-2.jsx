import React from "react";
import "../../assets/styles/form/form.css";
import Pagination from "./Pagination";
import Cancel from "./Cancel";
import FormType from "./Form-Type";
import { useFormStore } from "../../store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formPage2 } from "../../validation";

function Form2(props) {
  //get state values and functions from different stores
  const {
    trailName,
    country,
    countryName,
    difficultyLevel,
    distance,
    description,
    timeToComplete,
  } = useFormStore((state) => state.formData);
  const { updateForm, formNextPage, formPreviousPage, formType } =
    useFormStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formPage2),
  });

  //watch for input value changes and update state
  watch((data) => {
    for (const key in data) {
      updateForm(key, data[key]);
    }
  });

  //onsubmit callback function
  const onContinue = (data) => {
    setCountry(data.country);
    formNextPage();
  };

  //set country
  const setCountry = (value) => {
    const slectedCountry = props.countries.find(
      (country) => country.country_id === parseInt(value)
    );
    slectedCountry
      ? updateForm("countryName", slectedCountry.country)
      : updateForm("countryName", countryName);
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
                        {errors.trailName && (
                          <p className="form-error">
                            {errors.trailName.message}
                          </p>
                        )}
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
                        {errors.country && (
                          <p className="form-error">{errors.country.message}</p>
                        )}
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
                        {errors.difficultyLevel && (
                          <p className="form-error">
                            {errors.difficultyLevel.message}
                          </p>
                        )}
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
                        {errors.distance && (
                          <p className="form-error">
                            {errors.distance.message}
                          </p>
                        )}
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
                        {errors.description && (
                          <p className="form-error">
                            {errors.description.message}
                          </p>
                        )}
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
                        {errors.timeToComplete && (
                          <p className="form-error">
                            {errors.timeToComplete.message}
                          </p>
                        )}
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
                    {formType !== "edit" && (
                      <button
                        type="button"
                        className="btn my-2 btn-previous align-middle"
                        onClick={() => {
                          formPreviousPage();
                        }}
                      >
                        Previous
                      </button>
                    )}
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
