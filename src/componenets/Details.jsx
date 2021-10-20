import React, { useEffect } from "react";
import "../assets/styles/details.css";
import { useDetailedViewStore } from "../store";
import Photos from "./details/Photos";
import ReviewBreakdown from "./details/Review-Breakdown";
import ReviewForm from "./details/Review-Form";
import {
  getDayOfWeek,
  getMonthName,
  renderReview,
  renderButton,
} from "./trail-card/Trail-Card-Utils";

export default function Details() {
  const currentElelemt = useDetailedViewStore((state) => state.currentElelemt);
  const setCurrentElement = useDetailedViewStore(
    (state) => state.setCurrentElement
  );
  const currentView = useDetailedViewStore((store) => store.currentView);
  const setCurrentView = useDetailedViewStore((state) => state.setCurrentView);

  useEffect(() => {
    setCurrentElement();
  }, []);

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
              <h3 className="trail-heading">{currentElelemt.trailName}</h3>
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
          <div className="col-12 col-lg-4 bg-secondary">
            {/* suggested cards here */}
            OLA
          </div>
        </div>
      </article>
    </div>
  );
}
