import React from "react";
import "../assets/styles/trailcard.css";

export default function TrailCard(props) {
  // display difficulty
  const renderButton = (difficulty) => {
    const diffText =
      difficulty === 1
        ? "easy"
        : difficulty === 2
        ? "medium"
        : difficulty === 3
        ? "hard"
        : difficulty === 4
        ? "challenging"
        : "";
    return (
      <span className={"badge card-badge bg-secondary " + diffText}>
        {diffText}
      </span>
    );
  };

  // display star based on average review
  const renderReview = (review) => {
    const numReview = review.length;
    const avgReview =
      numReview > 1
        ? review.reduce(
            (previousValue, currentValue) =>
              previousValue.rating + currentValue.rating
          ) / numReview
        : numReview === 1
        ? review[0].rating
        : 0;

    var maxStars = 5;
    var star = [];
    for (let i = 0; i < avgReview; i++) {
      star.push(<i key={i} className="fas fa-star star-yellow"></i>);
      maxStars--;
    }
    for (let i = 0; i < maxStars; i++) {
      star.push(<i key={i + "grey"} className="fas fa-star star-grey"></i>);
    }

    if (review.length < 1) {
      return;
    } else {
      return (
        <span>
          {star}
          {`(${numReview})`}
        </span>
      );
    }
  };

  return (
    <div className="col d-flex justify-content-center my-xxl-4">
      <div className="border bg-light trail-card">
        <div
          className="img"
          style={{
            backgroundImage: `url(${props.trail.images[0]})`,
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
                <span className="sub-text-secondary py-1">
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
