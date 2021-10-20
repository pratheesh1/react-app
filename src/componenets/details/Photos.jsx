import React from "react";
import "../../assets/styles/details.css";
import { useDetailedViewStore } from "../../store";

export default function Photos() {
  const currentElelemt = useDetailedViewStore((store) => store.currentElelemt);
  const renderImages = (images) => {
    const imageComponents = images.map((img, index) => {
      return (
        <div key={index} className="col-6 col-lg-4 p-0 m-0">
          <div className="py-3 border img-details-wrapper">
            <img src={img} aria-label="trail" className="details-images" />
          </div>
        </div>
      );
    });
    return imageComponents;
  };

  return (
    <React.Fragment>
      <div className="row m-0 mt-4">
        <div className="col-8">
          <div className="row"></div>
          <h3 className="photo-heading">Add Photos of this trail</h3>
          <div className="row px-2">
            Photos help others discover the trail. Upload photos of this trail
            to inspire others.
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <button
            type="button"
            className="btn upload-img-btn"
            onClick={() => {
              console.log("clicked");
            }}
          >
            Upload
          </button>
        </div>
      </div>
      <hr className="mt-3" />
      <div className="row m-0">
        <div className="container overflow-hidden">
          <div className="row gy-3">
            {currentElelemt.images ? renderImages(currentElelemt.images) : ""}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
