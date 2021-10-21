import React, { useEffect } from "react";
import "../assets/styles/details.css";
import { useDetailedViewStore, useTrailStore } from "../store";
import Photos from "./details/Photos";
import ReviewBreakdown from "./details/Review-Breakdown";
import ReviewForm from "./details/Review-Form";
import TrailCard from "./trail-card/Trail-Card";
import {
  getDayOfWeek,
  getMonthName,
  renderReview,
  renderButton,
  shuffle,
} from "./trail-card/Trail-Card-Utils";

export default function Details() {
  const currentElelemt = useDetailedViewStore((state) => state.currentElelemt);
  const setCurrentElement = useDetailedViewStore(
    (state) => state.setCurrentElement
  );
  const detailedView = useDetailedViewStore((state) => state.detailedView);
  const currentView = useDetailedViewStore((state) => state.currentView);
  const setCurrentView = useDetailedViewStore((state) => state.setCurrentView);
  const updated = useDetailedViewStore((state) => state.updated);

  useEffect(() => {
    setCurrentElement();
  }, [detailedView, updated]);

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

  return (
    <div className="details-wrapper">
      <article className="container p-0 wrapper-contailer d-flex">
        <div className="row m-0">
          <div className="col-12 col-lg-8 p-0">
            <img
              className="trail-image-detailed"
              src={currentElelemt.images ? currentElelemt.images[0] : ""}
              alt="trail banner img"
            />
            {/* main Content */}
            <div className="row m-0 my-4">
              <div className="col-9 m-0 p-0">
                <h3 className="trail-heading">{currentElelemt.trailName}</h3>
              </div>
              <div className="col-3 m-0 p-0 d-flex flex-row justify-content-end">
                <div
                  className="col-6 m-0 p-0 d-flex justify-content-end"
                  role="button"
                >
                  <i
                    className="far fa-edit fs-3"
                    onClick={() => console.log("edit button")}
                  ></i>
                </div>
                <div className="col-6 m-0 p-0 d-flex justify-content-around">
                  <i
                    className="fas fa-trash-alt fs-3 delete-trail-btn"
                    role="button"
                    onClick={() => console.log("delete button")}
                  ></i>
                </div>
              </div>
            </div>
            <div className="row m-0 my-2 px-2 trail-subtext">
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
            <div className="row m-0 main-text px-2">
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
    </div>
  );
}
