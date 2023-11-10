import "./Menu.css";
import "./MenuSpecialty.css";

import { useState } from "react";

const bakedRoll = require("../../assets/Baked-Salmon-Roll.webp");
const HallelujahRoll = require("../../assets/Hallelujah-Roll.webp");
const RainbowRoll = require("../../assets/Rainbow-Roll.webp");

export default function MenuSpecialty() {
  const [currentImage, setCurrentImage] = useState(0);

  const specialtyData = [
    {
      id: 0,
      name: "Baked Salmon Roll",
      content: "Crab, avocado, and salmon on top",
      img: bakedRoll,
    },
    {
      id: 1,
      name: "Hallelujah Roll",
      content: "Spicy tuna, cucumber, avocado, and salmon on top",
      img: HallelujahRoll,
    },
    {
      id: 1,
      name: "Rainbow Roll",
      content: "Spicy tuna, cucumber, avocado, and salmon on top",
      img: RainbowRoll,
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
    <div className="menu-specialty-container mg-left-right-auto">
      <h1 className="menu-specialty-title menu-title-border-left mg-left-right-auto">
        Our Specialty Rolls
      </h1>

      <div className="menu-specialty-img-container mg-left-right-auto">
        {specialtyData.map((src, index) => {
          return (
            <img
              key={index}
              loading="lazy"
              src={src.img}
              alt="Specialty Roll"
              className={`menu-specailty-img ${
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
              className={`menu-specialty-name ${
                index === currentImage ? "active" : ""
              }`}
              key={index}
            >
              {text.name}
            </h2>
          );
        })}

        {specialtyData.map((text, index) => {
          return (
            <p
              className={`menu-specialty-content ${
                index === currentImage ? "active" : ""
              }`}
              key={index}
            >
              {text.content}
            </p>
          );
        })}
      </div>
    </div>
  );
}
