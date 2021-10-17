import React from "react";
import "../assets/styles/trailcard.css";

export default function TrailCard(props) {
  return (
    <div className="col d-flex justify-content-center my-xxl-4">
      <div className="border bg-light trail-card">
        <div className="img"></div>
        <div className="trail-card-body">{props.trailName}</div>
      </div>
    </div>
  );
}
