import React from "react";
import { useDetailedViewStore } from "../../store";
import "../../assets/styles/details.css";
import {
  renderReview,
  getPercentage,
  getNumber,
} from "../trail-card/Trail-Card-Utils";

export default function ReviewBreakdown() {
  const currentElelemt = useDetailedViewStore((state) => state.currentElelemt);
  return (
    <React.Fragment>
      <div className="col-12 p-0">
        <div className="row m-0">
          <div className="col-7 col-xl-6">
            <div className="row m-0 p-0 mt-2">
              <span>
                5 <i className="fas fa-star"></i>{" "}
                <canvas
                  className="bar-container"
                  style={{ width: getPercentage(currentElelemt, 5) }}
                ></canvas>
                {getNumber(currentElelemt, 5)}
              </span>
            </div>
            <div className="row m-0 p-0 mt-2">
              <span>
                4 <i className="fas fa-star"></i>{" "}
                <canvas
                  className="bar-container"
                  style={{ width: getPercentage(currentElelemt, 4) }}
                ></canvas>
                {getNumber(currentElelemt, 4)}
              </span>
            </div>
            <div className="row m-0 p-0 mt-2">
              <span>
                3 <i className="fas fa-star"></i>{" "}
                <canvas
                  className="bar-container"
                  style={{ width: getPercentage(currentElelemt, 3) }}
                ></canvas>
                {getNumber(currentElelemt, 3)}
              </span>
            </div>
            <div className="row m-0 p-0 mt-2">
              <span>
                2 <i className="fas fa-star"></i>{" "}
                <canvas
                  className="bar-container"
                  style={{ width: getPercentage(currentElelemt, 2) }}
                ></canvas>
                {getNumber(currentElelemt, 2)}
              </span>
            </div>
            <div className="row m-0 p-0 my-2">
              <span>
                1 <i className="fas fa-star"></i>{" "}
                <canvas
                  className="bar-container"
                  style={{ width: getPercentage(currentElelemt, 1) }}
                ></canvas>
                {getNumber(currentElelemt)}
              </span>
            </div>
          </div>
          <div className="col-5 col-xl-6">
            <div className="row my-4 mb-4">
              <div className="col-12 d-flex justify-content-center agv-review">
                {currentElelemt.review
                  ? currentElelemt.review.reduce(
                      (previousValue, currentValue) => ({
                        rating: previousValue.rating + currentValue.rating,
                      })
                    ).rating / currentElelemt.review.length
                  : 0}
              </div>
              <div className="col-12 d-flex justify-content-center mt-3">
                {currentElelemt.review
                  ? renderReview(currentElelemt.review)
                  : "No Review"}
              </div>
              <div className="col-12 d-flex justify-content-center mb-3">
                {currentElelemt.review
                  ? currentElelemt.review.length + " Reviews"
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
