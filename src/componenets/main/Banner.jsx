import React from "react";
import "../../assets/styles/main/banner.css";
import { useGlobalStore } from "../../store";

export default function Banner() {
  //get state values and functions from different stores
  const setPage = useGlobalStore((state) => state.setPage);

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
            <p className="banner-line line-2">peace of mind.</p>
            <p className="line-3">Wherever the trail lead may lead.</p>
          </div>
        </div>
        <div className="d-none d-xl-block banner-c2a position-absolute">
          <div className="row w-100 h-100">
            <div className="col-4 col-xl-6 order-2">
              <div className="h-100 d-flex justify-content-center align-bottom">
                <img
                  src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97"
                  aria-label="person holding a phone with map open"
                  className="c2a-img"
                />
              </div>
            </div>
            <div className="col-8 col-xl-6 order-1 h-100">
              <div className="container h-100 d-flex flex-wrap align-items-end justify-content-center pb-5">
                <div className="row w-100 pb-4">
                  <p className="c2a-heading">
                    Find out more which trails best suits your journey.{" "}
                  </p>
                  <p className="c2a-heading">
                    See what people are saying about theirs’.{" "}
                  </p>
                  <button
                    className="btn c2a-btn"
                    onClick={() => setPage("browseTrails")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-xl-none row m-0">
        <div className="col">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center position-relative">
              <img
                src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97"
                aria-label="person holding a phone with map open"
                className="banner-img-mobile position-absolute"
              />
              <div className="container pb-5">
                <div className="row banner-mobile d-flex flex-wrap align-items-end justify-content-center">
                  <p className="c2a-heading-mobile text-center">
                    Find out more which trails best suits your journey.{" "}
                  </p>
                  <p className="c2a-heading-mobile text-center">
                    See what people are saying about theirs’.{" "}
                  </p>
                  <button
                    className="btn c2a-btn-mobile"
                    onClick={() => setPage("browseTrails")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
