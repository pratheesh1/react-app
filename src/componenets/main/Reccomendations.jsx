import React from "react";
import TrailCard from "../trail-card/Trail-Card";
import { useTrailStore } from "../../store";

export default function Reccomendations() {
  //get state values and functions from different stores
  const trailsData = useTrailStore((state) => state.trailsData);

  //generate trail cards
  const generateTrailsCard = () => {
    return trailsData.map((trail) => (
      <TrailCard key={trail._id} trail={trail} />
    ));
  };

  return (
    <div className="d-flex flex-row overflow-scroll">
      {generateTrailsCard()}
    </div>
  );
}
