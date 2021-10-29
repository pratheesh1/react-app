import React from "react";
import "../../assets/styles/form/pagination.css";
import sucess from "../../assets/images/success.png";
import error from "../../assets/images/error.png";
import { useFormStore, useGlobalStore } from "../../store";

//button click handler
function tryAgain() {
  //getting non-reactive fresh state
  const currentPage = useFormStore.getState().formPage;
  useFormStore.setState({ formPage: currentPage - 1 });
}

const showConfirmation = (confirmation, setPage, formReset) => {
  switch (confirmation) {
    case true:
      return (
        //sucessfully added/updated trail
        <React.Fragment>
          <div className="banner-form-wrapper">
            <div className="row banner-form-header success-banner-form">
              <canvas></canvas>
            </div>
            <div className="row banner-form-body d-flex align-items-center justify-content-center">
              <div className="row d-flex align-items-center justify-content-center pt-3">
                <img src={sucess} aria-label="success" id="success-img" />
              </div>
              <div className="row m-0 d-flex align-items-center justify-content-center">
                <p
                  id="status-message"
                  className="d-flex align-items-center justify-content-center"
                >
                  New Trail added successfully.
                </p>
                <button
                  className="btn btn-confirmation success-banner-form"
                  onClick={() => {
                    setPage("browseTrails");
                    formReset();
                  }}
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    default:
      return (
        //adding/updating trail failed
        <React.Fragment>
          <div className="banner-form-wrapper">
            <div className="row banner-form-header error-banner-form">
              <canvas></canvas>
            </div>
            <div className="row banner-form-body d-flex align-items-center justify-content-center">
              <div className="row d-flex align-items-center justify-content-center">
                <img src={error} aria-label="success" id="error-img" />
              </div>
              <div className="row m-0 d-flex align-items-center justify-content-center pt-3">
                <p
                  id="status-message"
                  className="d-flex align-items-center justify-content-center"
                >
                  Oops! Something went wrong.
                </p>
                <button
                  className="btn btn-confirmation error-banner-form"
                  onClick={() => tryAgain()}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
  }
};

//export non-reactive component
export default function Confirmation(props) {
  const setPage = useGlobalStore((state) => state.setPage);
  const formReset = useFormStore((state) => state.formReset);
  return (
    <React.Fragment>
      {showConfirmation(props.confirmation, setPage, formReset)}
    </React.Fragment>
  );
}
