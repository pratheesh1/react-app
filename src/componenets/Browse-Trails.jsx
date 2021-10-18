import React, { useEffect } from "react";
import "../assets/styles/browsetrails.css";
import TrailCard from "./Trail-Card";
import { useTrailStore } from "../store";
import { useGlobalStore } from "../store";
import { useFormStore } from "../store";

export default function BrowseTrails() {
  const setTrailsData = useTrailStore((state) => state.setTrailsData);
  useEffect(() => {
    setTrailsData();
  }, []);

  const trailsData = useTrailStore((state) => state.trailsData);
  const numberOfTrails = useTrailStore((state) => state.numberOfTrails);
  const generateTrailsCard = () => {
    return trailsData.map((trail) => (
      <TrailCard key={trail._id} trail={trail} />
    ));
  };

  const setPage = useGlobalStore((state) => state.setPage);
  const setFormType = useFormStore((state) => state.setFormType);

  return (
    <div className=" browse-trail-wrapper">
      <div className="row p-0 m-0">
        <div className="col-6 px-xxl-5 my-1">
          <p className="row p-0 m-0">{numberOfTrails} results</p>
          <span className="d-none d-lg-inline-block p-0 m-0">
            Did not find what you were looking for?
          </span>
          <span className="p-0 m-0 text-decoration-underline">
            <button
              className="btn p-0 m-0 mx-lg-2 text-decoration-underline"
              onClick={() => {
                setPage("form");
                setFormType("add");
              }}
            >
              Add new trail
            </button>
          </span>
        </div>
        <div className="col-6 d-flex justify-content-end px-xxl-5 my-1">
          Hello
        </div>
      </div>
      <div className="row p-0 m-0 d-flex justify-content-between">
        <div className="">
          <div
            className="
          row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-5 g-xxl-3"
          >
            {generateTrailsCard()}
          </div>
        </div>
      </div>
    </div>
  );
}
