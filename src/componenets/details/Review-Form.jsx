import React from "react";

export default function ReviewForm() {
  return (
    <React.Fragment>
      <div className="row m-0 px-2 main-text">
        Been on this adventure? Leave a review.
      </div>
      <div className="row m-0">
        {/* review star */}
        <div className="rating justify-content-center">
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            className="star-radio"
            onChange={(e) => console.log(e.target.value, e.target.name)}
          />
          <label
            className="star-label"
            htmlFor="star5"
            title="5 star"
            aria-label="rating"
          >
            <i className="fas fa-star px-3"></i>
          </label>
          <input
            type="radio"
            id="star4"
            name="rating"
            value="4"
            className="star-radio"
            onChange={(e) => console.log(e.target.value, e.target.name)}
          />
          <label
            className="star-label"
            htmlFor="star4"
            title="4 star"
            aria-label="rating"
          >
            <i className="fas fa-star px-3"></i>
          </label>
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            className="star-radio"
            onChange={(e) => console.log(e.target.value, e.target.name)}
          />
          <label
            className="star-label"
            htmlFor="star3"
            title="3 star"
            aria-label="rating"
          >
            <i className="fas fa-star px-3"></i>
          </label>
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            className="star-radio"
            onChange={(e) => console.log(e.target.value, e.target.name)}
          />
          <label
            className="star-label"
            htmlFor="star2"
            title="2 star"
            aria-label="rating"
          >
            <i className="fas fa-star px-3"></i>
          </label>
          <input
            type="radio"
            id="star1"
            name="rating"
            value="1"
            className="star-radio"
            onChange={(e) => console.log(e.target.value, e.target.name)}
          />
          <label
            className="star-label"
            htmlFor="star1"
            title="1 star"
            aria-label="rating"
          >
            <i className="fas fa-star px-3"></i>
          </label>
        </div>
      </div>
      <div className="row m-0 my-3">
        <div className="col-12 col-xl-6">
          <p className="field-heading m-0">name</p>
          <input
            type="text"
            id="reviewName"
            className="filed-input-small"
            placeholder="Name"
            value=""
            onChange={(e) => console.log(e.target.id, e.target.value)}
          />
        </div>
        <div className="col-12 col-xl-6">
          <p className="field-heading m-0">email</p>
          <input
            type="text"
            id="reviewEmail"
            className="filed-input-small"
            placeholder="Name"
            value=""
            onChange={(e) => console.log(e.target.id, e.target.value)}
          />
        </div>
      </div>
      <div className="row m-0">
        <div className="col-12">
          <textarea
            type="text"
            id="newReviewText"
            className="review-text"
            placeholder="Tell us what you think"
            value=""
            onChange={(e) => console.log(e.target.id, e.target.value)}
          />
        </div>
      </div>
      <div className="row m-0 d-flex justify-content-end submit-review-btn-wrapper">
        <button
          type="button"
          className="btn submit-review-btn"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Submit Review
        </button>
      </div>
    </React.Fragment>
  );
}
