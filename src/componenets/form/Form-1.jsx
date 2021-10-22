import React from "react";
import "../../assets/styles/form/form.css";
import Pagination from "./Pagination";
import Cancel from "./Cancel";
import FormType from "./Form-Type";
import { useFormStore } from "../../store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formPage1 } from "../../validation";

function Form1(props) {
  //get state values and functions from different stores
  const { firstName, lastName, email, aboutYou } = useFormStore(
    (state) => state.formData
  );
  const { updateForm, formNextPage } = useFormStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formPage1),
  });

  //watch for input value changes and update state
  watch((data) => {
    for (const key in data) {
      updateForm(key, data[key]);
    }
  });

  return (
    <React.Fragment>
      <div className="row w-100 p-0 m-0">
        <form onSubmit={handleSubmit(formNextPage)}>
          <div className="container form-wrapper">
            <div className="container from-content-wrapper">
              <div className="row p-0 m-0">
                {/* Heading */}
                <FormType type={props.type} />
                {/* non-responsive pagination */}
                <div className="row p-0 m-0 pagination">
                  <div className="row p-0 m-0"></div>
                  <Pagination page={1} />
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
                          {...register("firstName")}
                          className="filed-input-small"
                          placeholder="First name"
                          value={firstName}
                        />
                        {errors.firstName && (
                          <p className="form-error">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div className="col-12 col-lg-6 my-3 my-lg-0">
                        <p className="field-heading m-0">last name</p>
                        <input
                          type="text"
                          {...register("lastName")}
                          className="filed-input-small"
                          placeholder="Last name"
                          value={lastName}
                        />
                        {errors.lastName && (
                          <p className="form-error">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="row p-0 m-0 my-lg-3 form-row">
                      <div className="col-12 col-lg-6 my-3 my-lg-0">
                        <p className="field-heading m-0">email</p>
                        <input
                          type="text"
                          {...register("email")}
                          className="filed-input-small"
                          placeholder="Email ID"
                          value={email}
                        />
                        {errors.email && (
                          <p className="form-error">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="row p-0 m-0 my-lg-3 form-row">
                      <div className="col-12 col-lg-6 my-3 my-lg-0">
                        <p className="field-heading m-0">
                          tell us more about you
                        </p>
                        <textarea
                          {...register("aboutYou")}
                          className="filed-input-large"
                          placeholder="I am very into hiking and trail running. I enjoy connecting with..."
                          value={aboutYou}
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

export default Form1;
