import React from "react";
import "../../assets/styles/main/banner.css";

export default function Banner() {
  return (
    <React.Fragment>
      <div className="banner-wrapper position-relative">
        <img
          src="https://images.unsplash.com/photo-1587502537745-84b86da1204f"
          aria-label="woman looking over a cliff"
          className="banner-img"
        />
        <div className="row position-absolute banner-heading">
          <div>
            <p className="banner-line line-1 m-0">Go forth with</p>
            <p className="banner-line line-2">peace of mind</p>
            <p className="line-3">Wherever the trail lead may lead </p>
          </div>
        </div>
        <div className="banner-c2a position-absolute">
          <div className="row w-100 h-100">
            <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center align-bottom">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97"
                  aria-label="person holding a phone with map open"
                  className="c2a-img"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="row d-flex justify-content-center">
                <p className="c2a-heading">
                  Find out more which trails best suits your journey.{" "}
                </p>
                <p className="c2a-heading">
                  See what people are saying about theirs’.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
