import React from "react";
import TrailCard from "../trail-card/Trail-Card";
import { useTrailStore } from "../../store";
import Slider from "react-slick";

export default function Reccomendations() {
  //get state values and functions from different stores
  const trailsData = useTrailStore((state) => state.trailsData);
  const slicedData =
    trailsData.length > 7 ? trailsData.slice(0, 6) : trailsData;

  //generate trail cards
  const generateTrailsCard = () => {
    return slicedData.map((trail) => (
      <TrailCard key={trail._id} trail={trail} />
    ));
  };

  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 700,
    swipeToSlide: true,
    slidesToShow: 4.7,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnFocus: true,
    className: "slides",
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>{generateTrailsCard()}</Slider>
    </div>
  );
}
