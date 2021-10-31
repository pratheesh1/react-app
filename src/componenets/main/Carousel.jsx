import React from "react";
import carouselImg1 from "../../assets/images/carousel-img1.jpg";
import carouselImg2 from "../../assets/images/carousel-img2.jpg";
import carouselImg3 from "../../assets/images/carousel-img3.jpg";

import "../../assets/styles/main/main.css";
import Search from "./Search";

export default function Carousel() {
  return (
    <div id="maincarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators justify-content-lg-end">
        <button
          type="button"
          data-bs-target="#maincarousel"
          data-bs-slide-to="0"
          aria-label="Slide 1"
          className="px-lg-4"
        ></button>
        <button
          type="button"
          data-bs-target="#maincarousel"
          data-bs-slide-to="1"
          className="active px-lg-4"
          aria-current="true"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#maincarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="px-lg-4"
        ></button>
      </div>
      <div className="carousel-inner position-relative">
        {/* Search Component */}
        <Search />
        <div className="carousel-item ">
          <img
            src={carouselImg1}
            className="d-block carousel-img"
            alt="carousel trail"
          />
        </div>
        <div className="carousel-item active">
          <img
            src={carouselImg2}
            className="d-block carousel-img"
            alt="carousel trail"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carouselImg3}
            className="d-block carousel-img"
            alt="carousel trail"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev d-none d-md-block"
        type="button"
        data-bs-target="#maincarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next d-none d-md-block"
        type="button"
        data-bs-target="#maincarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
