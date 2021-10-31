import React from "react";
import Slider from "react-slick";
import "../../assets/styles/main/activities.css";
import { useGlobalStore, useTrailStore, useSearchStore } from "../../store";

export default function Activities() {
  //get state values and functions from different stores
  const setPage = useGlobalStore((state) => state.setPage);
  const setTrailsData = useTrailStore((state) => state.setTrailsData);
  const updateSearch = useSearchStore((state) => state.updateSearch);

  // array of activities
  const activities = [
    {
      name: "Off Road Driving",
      img: "https://images.unsplash.com/photo-1596507931135-75f699668356",
    },
    {
      name: "Diving",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    },
    {
      name: "Camping",
      img: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225",
    },
    {
      name: "Skiing",
      img: "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
    },
    {
      name: "Rock Climbing",
      img: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
    },
    {
      name: "Running",
      img: "https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7",
    },
    {
      name: "Hiking",
      img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
    },
  ];

  //render activities
  const activitiesRender = () => {
    return activities.map((activity, index) => {
      return (
        <div key={index}>
          <div className="d-flex justify-content-center">
            <div
              className="activity-wrapper position-relative"
              role="button"
              onClick={() => {
                updateSearch("search", activity.name);
                setPage("browseTrails");
                setTrailsData({ q: activity.name });
              }}
            >
              <img
                src={activity.img}
                aria-label="activity"
                className="activity"
              />
              <h3 className="activity-title position-absolute">
                {activity.name}
              </h3>
            </div>
          </div>
        </div>
      );
    });
  };

  //settings for carousel
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 700,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    initialSlide: 0,
    pauseOnFocus: true,
    className: "activity-slick",
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="row m-0 activity-component">
      <div className="col-12 col-lg-8 order-2 order-lg-1">
        <Slider {...settings}>{activitiesRender()}</Slider>
      </div>
      <div className="col-12 col-lg-4 order-1 order-lg-2">
        <div className="row pt-5 h-100 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <p className="activities-heading ">
              Something for everyone to discover and connect with nature.
            </p>
            <p className="activities-subheading">
              Whereever you want to go, whatever you have in mind, we've got you
              covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
