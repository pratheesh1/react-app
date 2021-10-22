import React from "react";
import "../../assets/styles/trailcard.css";
import { useGlobalStore, useDetailedViewStore } from "../../store";
import { renderButton, renderReview } from "./Trail-Card-Utils";

export default function TrailCard(props) {
  const setPage = useGlobalStore((state) => state.setPage);
  const setDetailedView = useDetailedViewStore(
    (state) => state.setDetailedView
  );

  return (
    <div
      className="col d-flex justify-content-center my-xxl-4"
      role="button"
      onClick={() => {
        setPage("details");
        setDetailedView(props.trail._id);
      }}
    >
      <div className="border bg-light trail-card">
        <div
          className="img"
          style={{
            backgroundImage: `url(${
              props.trail.images ? props.trail.images[0] : ""
            })`,
          }}
        ></div>
        <div className="trail-card-body mx-2">
          <div className="row">
            <div className="col-9">
              <div className="row">
                <span className="title-text">{props.trail.trailName}</span>
              </div>
              <div className="row">
                <span className="sub-text">{props.trail.country.name}</span>
              </div>
            </div>
            <div className="col-3 justify-content-end">
              <i className="far fa-heart p-3 fa-5"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="row p-0 m-0">
                {renderButton(props.trail.difficulty)}
              </div>
              <div className="row p-0 m-0 text-secondary">
                <span className="sub-text-secondary py-1 text-nowrap">
                  Length: {props.trail.distance}
                </span>
              </div>
            </div>
            <div className="col-8">
              <div className="row p-0 m-0">
                {renderReview(props.trail.review) ? (
                  renderReview(props.trail.review)
                ) : (
                  <span className="sub-text-secondary my-1">No Review</span>
                )}
              </div>
              <div className="row p-0 m-0 text-secondary">
                <span className="sub-text-secondary p-0">
                  Est. {props.trail.timeToComplete} Hr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
