import React from "react";
import "../../assets/styles/form/pagination.css";

export default function Pagination(props) {
  return (
    <React.Fragment>
      <div className="container">
        {" "}
        <div className="row row-cols-5 g-0">
          <div className="col">
            <hr
              className={
                props.page === 1 ? "page-hr active-hr" : "page-hr done-hr"
              }
            />
            <div className="row p-0 m-0">
              <div className="p-0 m-0">
                {props.page === 1 ? (
                  <i className="far fa-dot-circle d-none d-md-inline-block active-icon"></i>
                ) : (
                  <i className="fas fa-check-circle d-none d-md-inline-block "></i>
                )}
                <span
                  className={
                    props.page === 1
                      ? "p-2 page-text text-nowrap"
                      : "p-2 page-text page-text-disbled text-nowrap"
                  }
                >
                  Your Info
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <hr
              className={
                props.page < 2
                  ? "page-hr"
                  : props.page === 2
                  ? "page-hr active-hr"
                  : "page-hr done-hr"
              }
            />
            <div className="row p-0 m-0 ">
              <div className="p-0 m-0">
                {props.page < 2 ? (
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                ) : props.page === 2 ? (
                  <i className="far fa-dot-circle d-none d-md-inline-block active-icon"></i>
                ) : (
                  <i className="fas fa-check-circle d-none d-md-inline-block "></i>
                )}
                <span
                  className={
                    props.page === 2
                      ? "p-2 page-text text-nowrap"
                      : "p-2 page-text page-text-disbled text-nowrap"
                  }
                >
                  Trail
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <hr
              className={
                props.page < 3
                  ? "page-hr"
                  : props.page === 3
                  ? "page-hr active-hr"
                  : "page-hr done-hr"
              }
            />
            <div className="row p-0 m-0 ">
              <div className="p-0 m-0">
                {props.page < 3 ? (
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                ) : props.page === 3 ? (
                  <i className="far fa-dot-circle d-none d-md-inline-block active-icon"></i>
                ) : (
                  <i className="fas fa-check-circle d-none d-md-inline-block "></i>
                )}{" "}
                <span
                  className={
                    props.page === 3
                      ? "p-2 page-text text-nowrap"
                      : "p-2 page-text page-text-disbled text-nowrap"
                  }
                >
                  Details
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <hr
              className={
                props.page < 4
                  ? "page-hr"
                  : props.page === 4
                  ? "page-hr active-hr"
                  : "page-hr done-hr"
              }
            />
            <div className="row p-0 m-0 ">
              <div className="p-0 m-0">
                {props.page < 4 ? (
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                ) : props.page === 4 ? (
                  <i className="far fa-dot-circle d-none d-md-inline-block active-icon"></i>
                ) : (
                  <i className="fas fa-check-circle d-none d-md-inline-block "></i>
                )}{" "}
                <span
                  className={
                    props.page === 4
                      ? "p-2 page-text text-nowrap"
                      : "p-2 page-text page-text-disbled text-nowrap"
                  }
                >
                  Review
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <hr className={props.page < 5 ? "page-hr" : "page-hr active-hr"} />
            <div className="row p-0 m-0 ">
              <div className="p-0 m-0">
                {props.page < 5 ? (
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                ) : (
                  <i className="fas fa-check-circle d-none d-md-inline-block active-icon"></i>
                )}{" "}
                <span
                  className={
                    props.page === 5
                      ? "p-0 p-md-2 page-text overflow-hidden"
                      : "p-0 p-md-2 page-text page-text-disbled text-break"
                  }
                >
                  Confirmation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
