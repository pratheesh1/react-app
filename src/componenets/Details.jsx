import React, { useEffect } from "react";
import "../assets/styles/details.css";
import {
  useDetailedViewStore,
  useTrailStore,
  useGlobalStore,
  useFormStore,
} from "../store";
import Photos from "./details/Photos";
import ReviewBreakdown from "./details/Review-Breakdown";
import ReviewForm from "./details/Review-Form";
import TrailCard from "./trail-card/Trail-Card";
import { renderReview, renderButton } from "./trail-card/Trail-Card-Utils";
import { getDayOfWeek, getMonthName, shuffle } from "../utils";

export default function Details() {
  //get state values and functions from different stores
  const {
    currentElelemt,
    setCurrentElement,
    detailedView,
    currentView,
    setCurrentView,
    updated,
    deleteTrail,
  } = useDetailedViewStore();
  const setPage = useGlobalStore((state) => state.setPage);
  const { formNextPage, setFormType, updateForm, setTrailBeingEdited } =
    useFormStore();

  //fetch data and sunscribe to state changes
  useEffect(() => {
    setCurrentElement();
  }, [detailedView, updated, setCurrentElement]);

  //get 2 random trail cards as suggested reading
  const allTrails = useTrailStore((state) => state.trailsData).filter(
    (trail) => trail._id !== currentElelemt._id
  );
  const suggestedTrail = shuffle(allTrails).slice(0, 2);
  const generateTrailsCard = () => {
    return suggestedTrail.map((trail) => (
      <div className="my-2" key={trail._id}>
        <TrailCard trail={trail} />
      </div>
    ));
  };

  //function to set form-state data to enable edit trail
  const updateEditFormState = () => {
    updateForm("_id", currentElelemt._id);
    updateForm("trailName", currentElelemt.trailName);
    updateForm("description", currentElelemt.description);
    updateForm("country", currentElelemt.country.id);
    updateForm("countryName", currentElelemt.name);
    updateForm("difficultyLevel", currentElelemt.difficulty);
    updateForm("distance", currentElelemt.distance);
    updateForm("timeToComplete", currentElelemt.timeToComplete);
    updateForm("describeTrail", currentElelemt.describeTrail);
    updateForm("imageLink", currentElelemt.images);
    setTrailBeingEdited(currentElelemt.trailName);
  };

  return (
    <div className="details-wrapper pt-lg-3">
      <article className="container p-0 wrapper-contailer d-flex">
        <div className="row m-0">
          <div className="col-12 col-lg-8 p-0 position-relative">
            <img
              className="trail-image-detailed"
              src={currentElelemt.images ? currentElelemt.images[0] : ""}
              alt="trail banner img"
            />
            <i
              className="fas fa-home position-absolute go-back-btn"
              role="button"
              onClick={() => setPage("browseTrails")}
            ></i>
            {/* main Content */}
            <div className="row m-0 my-2 p-0">
              <div className="col-9 m-0 pl-3">
                <h3 className="trail-heading">{currentElelemt.trailName}</h3>
              </div>
              <div className="col-3 m-0 p-0 d-flex flex-row justify-content-end">
                <div
                  className="col-6 m-0 p-0 d-flex justify-content-end"
                  role="button"
                >
                  <i
                    className="far fa-edit fs-3"
                    onClick={() => {
                      setFormType("edit");
                      formNextPage();
                      updateEditFormState();
                      setPage("form");
                    }}
                  ></i>
                </div>
                <div className="col-6 m-0 p-0 d-flex justify-content-around">
                  <i
                    className="fas fa-trash-alt fs-3 delete-trail-btn"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteTrailModal"
                  ></i>
                </div>
              </div>
            </div>
            <div className="row m-0 my-2 px-3 trail-subtext">
              {currentElelemt.description}
            </div>
            <div className="row m-0 my-3">
              <div className="col-12 col-lg-6 my-2 blockquote-footer">
                {currentElelemt.createdBy
                  ? `Written by 
                  ${currentElelemt.createdBy.firstName}
                  ${currentElelemt.createdBy.lastName},
                  ${getDayOfWeek(currentElelemt.createdAt)}
                  ${new Date(currentElelemt.createdAt).getDate()}
                  ${getMonthName(currentElelemt.createdAt)}
                  ${new Date(currentElelemt.createdAt).getFullYear()}`
                  : ""}
              </div>
              <div className="col-12 col-lg-6">
                <div className="row m-0 w-100">
                  <div className="col-6 p-0 d-flex justify-content-around">
                    {renderButton(currentElelemt.difficulty)}
                  </div>
                  <div className="col-6 p-0 text-secondary">
                    {currentElelemt.review
                      ? currentElelemt.review.length > 0
                        ? renderReview(currentElelemt.review)
                        : "No Review"
                      : "No Review"}
                  </div>
                </div>
                <div className="row m-0 w-100">
                  <div className="col-6 text-secondary d-flex justify-content-around">
                    <span className="sub-text-secondary py-1 text-nowrap text-dark">
                      Length: {currentElelemt.distance}
                    </span>
                  </div>
                  <div className="col-6 text-secondary">
                    <span className="sub-text-secondary p-0 text-dark">
                      Est. {currentElelemt.timeToComplete} Hr
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0 main-text px-3">
              {currentElelemt.describeTrail}
            </div>
            <hr className="w-100" />
            {/* review form */}
            <ReviewForm />
            <hr className="w-100" />
            {/* current reviews and photos */}
            <div className="row m-0">
              <div className="col-12 p-0">
                <div className="row m-0 title-wrapper mb-2">
                  <div
                    className="col-6 title py-1"
                    onClick={() => setCurrentView("review")}
                  >
                    Past Review (
                    {currentElelemt.review ? currentElelemt.review.length : 0})
                  </div>
                  <div
                    className="col-6 title py-1"
                    onClick={() => setCurrentView("photos")}
                  >
                    Photos (
                    {currentElelemt.images ? currentElelemt.images.length : 0})
                  </div>
                  {/* toggle photo and review */}
                  {currentView === "review" ? <ReviewBreakdown /> : <Photos />}
                </div>
              </div>
              <div className="col-12 p-0"></div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            {/* suggested cards here */}
            <div className="container">
              <div className="row">
                <h4 className="mx-lg-4 pt-3">More reading:</h4>
              </div>
              <div className="row">{generateTrailsCard()}</div>
            </div>
          </div>
        </div>
      </article>
      {/* Modal */}
      <div
        className="modal fade"
        id="deleteTrailModal"
        tabIndex="-1"
        aria-labelledby="deleteTrailModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title field-heading">Delete Trail</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6 className="modal-title field-heading">
                Are you sure you want to delete {currentElelemt.trailName}?
              </h6>
              <p className="text-secondary blockquote-footer pt-4">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn my-lg-2 btn-discard align-middle"
                data-bs-dismiss="modal"
                onClick={() => {
                  deleteTrail();
                  setPage("browseTrails");
                }}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
