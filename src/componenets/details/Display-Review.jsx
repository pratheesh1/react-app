import React from "react";
import profile from "../../assets/images/profile.avif";
import "../../assets/styles/details.css";
import { getMonthName, renderReview } from "../trail-card/Trail-Card-Utils";

export default function DisplayReview(props) {
  const reviewsArrayObj = props.reviewsArray;

  let reviews = [];
  for (let i = 0; i < reviewsArrayObj.length; i++) {
    reviews.push(reviewsArrayObj[i]);
  }
  reviews.reverse();

  return reviews.length
    ? reviews.map((review, index) => {
        return (
          <React.Fragment key={index}>
            <hr />
            <div className="container">
              <div className="col-12 px-2">
                <div className="row">
                  <div className="col-3 col-sm-2">
                    <div className="row">
                      <img
                        src={profile}
                        aria-label="profile"
                        className="profile-image"
                      />
                    </div>
                  </div>
                  <div className="col-9 m-0 p-0">
                    <div className="row">{review.username}</div>
                    <div className="row">
                      <div className="col text-secondary">
                        {getMonthName(review.datetime)}{" "}
                        {new Date(review.datetime).getDate()},{" "}
                        {new Date(review.datetime).getFullYear()}
                      </div>
                      <div className="col">{renderReview([review], false)}</div>
                    </div>
                    <div className="row pt-3 pb-2">{review.reviewText}</div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })
    : "";
}
