import React from "react";
import "./assets/styles/404.css";
import { useGlobalStore } from "./store";

export default function E404() {
  //get state values and functions from different stores
  const setPage = useGlobalStore((state) => state.setPage);

  return (
    <React.Fragment>
      <div className="container wrapper-404  d-flex justify-content-center">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="m-5">404</h1>
            <h1 className="m-5">The page you are looking for is not here.</h1>
          </div>
          <div className="col-12 text-end">
            <h6
              className="m-4 text-decoration-underline"
              role="button"
              onClick={() => setPage("main")}
            >
              Continue to homepage.
            </h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
