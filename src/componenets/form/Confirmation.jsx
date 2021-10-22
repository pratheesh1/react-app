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
          <div className="row banner-wrapper">
            <div className="row banner-header success-banner">
              <canvas></canvas>
            </div>
            <div className="row banner-body d-flex align-items-center justify-content-center">
              <div className="row d-flex align-items-center justify-content-center">
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
                  className="btn btn-confirmation success-banner"
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
          <div className="row banner-wrapper">
            <div className="row banner-header error-banner">
              <canvas></canvas>
            </div>
            <div className="row banner-body d-flex align-items-center justify-content-center">
              <div className="row d-flex align-items-center justify-content-center">
                <img src={error} aria-label="success" id="error-img" />
              </div>
              <div className="row m-0 d-flex align-items-center justify-content-center">
                <p
                  id="status-message"
                  className="d-flex align-items-center justify-content-center"
                >
                  Oops! Something went wrong.
                </p>
                <button
                  className="btn btn-confirmation error-banner"
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
