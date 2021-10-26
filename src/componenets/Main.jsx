import React from "react";
import Carousel from "./main/Carousel";
import Reccomendations from "./main/Reccomendations";
import { useTrailStore } from "../store";

export default function Main() {
  //get state values and functions from different stores
  const setTrailsData = useTrailStore((state) => state.setTrailsData);

  //set trails data
  setTrailsData();

  return (
    <React.Fragment>
      <Carousel />
      <Reccomendations />
    </React.Fragment>
  );
}
