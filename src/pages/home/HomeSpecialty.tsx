import React, { useState } from "react";
import "./HomeSpecialty.css";
import "./Home.css";

const bakedRoll = require("../../assets/Baked-Salmon-Roll.webp");
const HallelujahRoll = require("../../assets/Hallelujah-Roll.webp");

export default function HomeSpecialty() {
  const [currentImage, setCurrentImage] = useState(0);

  const specialtyData = [
    {
      id: 0,
      name: "Baked Salmon Roll",
      img: bakedRoll,
    },
    {
      id: 1,
      name: "Hallelujah Roll",
      img: HallelujahRoll,
    },
  ];

  const goToPrevious = () => {
    setCurrentImage(
      currentImage === 0 ? specialtyData.length - 1 : currentImage - 1
    );
  };

  const goToNext = () => {
    setCurrentImage(
      currentImage === specialtyData.length - 1 ? 0 : currentImage + 1
    );
  };

  return (
    <div className="home-specialty-container home-common-container mg-left-right-auto">
      <h1 className="home-specialty-title home-title-border-left mg-left-right-auto">
        Our Specialty Rolls
      </h1>

      <div className="home-specialty-img-container mg-left-right-auto">
        {specialtyData.map((src, index) => {
          return (
            <img
              key={index}
              loading="lazy"
              src={src.img}
              alt="Specialty Roll"
              className={`home-specailty-img ${
                index === currentImage ? "active" : ""
              }`}
            />
          );
        })}

        <button className="carousel-control-prev" onClick={goToPrevious}>
          &lt;
        </button>
        <button className="carousel-control-next" onClick={goToNext}>
          &gt;
        </button>

        {specialtyData.map((text, index) => {
          return (
            <h2
              className={`home-specialty-name ${
                index === currentImage ? "active" : ""
              }`}
              key={index}
            >
              {text.name}
            </h2>
          );
        })}
      </div>
    </div>
  );
}
