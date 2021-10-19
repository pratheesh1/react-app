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
      <article className="container p-0 wrapper-contailer d-flex">
        <div className="row m-0">
          <div className="col-12 col-lg-8 p-0">
            <img
              className="trail-image-detailed"
              src={currentElelemt.images ? currentElelemt.images[0] : ""}
              alt="trail banner img"
            />
          </div>
          <div className="col-12 order-2 order-lg-3">
            {/* main Content */}
            <div className="row m-0">title</div>
            <div className="row m-0">subtitle</div>
            <div className="row m-0">
              <div className="col-12 col-lg-6">author</div>
              <div className="col-12 col-lg-6">rating</div>
            </div>
            <div className="row m-0">main</div>
            <hr className="w-100" />
            <div className="row m-0">review?</div>
            <div className="row m-0">star</div>
            <div className="row m-0">
              <div className="col-12 col-lg-6">name</div>
              <div className="col-12 col-lg-6">name email</div>
            </div>
            <div className="row m-0">add review textbox</div>
            <div className="row m-0">button</div>
            <hr className="w-100" />
            <div className="row m-0">rewiew</div>
          </div>
          <div className="col-12 col-lg-4 bg-secondary order-3 order-lg-2">
            {/* suggested cards here */}
          </div>
        </div>
      </article>
    </div>
  );
}
