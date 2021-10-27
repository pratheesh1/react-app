import React from "react";
import { useTrailStore } from "../store";
import Carousel from "./main/Carousel";
import Reccomendations from "./main/Reccomendations";
import Activities from "./main/Activities";
import Banner from "./main/Banner";

export default function Main() {
  //get state values and functions from different stores
  const setTrailsData = useTrailStore((state) => state.setTrailsData);

  //set trails data
  setTrailsData();

  return (
    <React.Fragment>
      <Carousel />
      <Reccomendations />
      <Activities />
      <Banner />
    </React.Fragment>
  );
}
