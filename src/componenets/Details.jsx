import React, { useEffect } from "react";
import "../assets/styles/details.css";
import { useDetailedViewStore } from "../store";

export default function Details() {
  const currentElelemt = useDetailedViewStore((state) => state.currentElelemt);
  const setCurrentElement = useDetailedViewStore(
    (state) => state.setCurrentElement
  );

  useEffect(() => {
    setCurrentElement();
  }, []);

  return (
    <div className="details-wrapper">
      <div className="container p-0 wrapper-contailer">
        <div className="row m-0">
          <div className="col-12 col-lg-8 p-0">
            <img
              className="trail-image-detailed"
              //FIXME: Causing error because trying to access images[0] before API data loaded
              src={currentElelemt.images[0]}
              alt="trail running hiking"
            />
          </div>
          <div className="col-12 col-lg-4 bg-secondary">Hello</div>
        </div>
      </div>
    </div>
  );
}
