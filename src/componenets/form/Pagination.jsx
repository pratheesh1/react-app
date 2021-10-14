import React from "react";
import "../../assets/styles/form/pagination.css";

function selectPage(page) {
  switch (page) {
    case "page1":
      return (
        <React.Fragment>
          <div className="d-flex flex-row">
            <div className="col-3">
              <hr className="page-hr active-hr" />
              <div className="row p-0 m-0">
                <text className="p-0 m-0">
                  <i className="far fa-dot-circle d-none d-md-inline-block active-icon"></i>
                  <span className="p-2 page-text">Your Info</span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">Trail</span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Details
                  </span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Review
                  </span>
                </text>
              </div>
            </div>
            <div className="col-3">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Confirmation
                  </span>
                </text>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    case "page2":
      return (
        <React.Fragment>
          <div className="d-flex flex-row">
            <div className="col-3">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block "></i>
                  <span className="p-2 page-text  page-text-disbled">
                    Your Info
                  </span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr active-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-dot-circle d-none d-md-inline-block active-icon"></i>
                  <span className="p-2 page-text">Trail</span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Details
                  </span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Review
                  </span>
                </text>
              </div>
            </div>
            <div className="col-3">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Confirmation
                  </span>
                </text>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    case "page3":
      return (
        <React.Fragment>
          <div className="d-flex flex-row">
            <div className="col-3">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block "></i>
                  <span className="p-2 page-text page-text-disbled">
                    Your Info
                  </span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">Trail</span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr active-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-dot-circle d-none d-md-inline-block active-icon"></i>
                  <span className="p-2 page-text">Details</span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Review
                  </span>
                </text>
              </div>
            </div>
            <div className="col-3">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Confirmation
                  </span>
                </text>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    case "page4":
      return (
        <React.Fragment>
          <div className="d-flex flex-row">
            <div className="col-3">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block "></i>
                  <span className="p-2 page-text page-text-disbled">
                    Your Info
                  </span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">Trail</span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled ">
                    Details
                  </span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr active-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-dot-circle d-none d-md-inline-block active-icon"></i>
                  <span className="p-2 page-text">Review</span>
                </text>
              </div>
            </div>
            <div className="col-3">
              <hr className="page-hr " />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="far fa-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Confirmation
                  </span>
                </text>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    case "page5":
      return (
        <React.Fragment>
          <div className="d-flex flex-row">
            <div className="col-3">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Your Info
                  </span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">Trail</span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Details
                  </span>
                </text>
              </div>
            </div>
            <div className="col-2">
              <hr className="page-hr done-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block"></i>
                  <span className="p-2 page-text page-text-disbled">
                    Review
                  </span>
                </text>
              </div>
            </div>
            <div className="col-3">
              <hr className="page-hr active-hr" />
              <div className="row p-0 m-0 ">
                <text className="p-0 m-0">
                  <i className="fas fa-check-circle d-none d-md-inline-block active-icon"></i>
                  <span className="p-2 page-text">Confirmation</span>
                </text>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    default:
      return <React.Fragment>Pagination Error!</React.Fragment>;
  }
}

export default function Pagination(props) {
  return (
    <React.Fragment>
      <div className="row m-0">{selectPage(props.page)}</div>
    </React.Fragment>
  );
}
