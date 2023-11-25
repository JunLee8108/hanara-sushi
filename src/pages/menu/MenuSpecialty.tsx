import React, { useState } from "react";
import "./Menu.css";
import "./MenuSpecialty.css";

import { Fragment } from "react";

// Import your images
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
      id: 2,
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

  const getPreviousImageIndex = () => {
    return currentImage === 0 ? specialtyData.length - 1 : currentImage - 1;
  };

  const getNextImageIndex = () => {
    return currentImage === specialtyData.length - 1 ? 0 : currentImage + 1;
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
    document.body.style.overflow = "hidden";
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      if (touchStart - touchEnd > 150) {
        // Left swipe
        goToNext();
      } else if (touchEnd - touchStart > 150) {
        // Right swipe
        goToPrevious();
      }
    }

    // Reset touch positions
    setTouchStart(null);
    setTouchEnd(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="menu-specialty-container mg-left-right-auto">
      <h1 className="menu-specialty-title">Our Specialty Rolls</h1>

      <div
        className="menu-specialty-img-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="menu-specialty-imgbox">
          {specialtyData.map((content, index) => {
            return (
              <img
                src={content.img}
                className={`menu-specialty-left-right-img ${
                  index === getPreviousImageIndex() ? "active-fade" : ""
                } `}
                onClick={goToPrevious}
                key={index}
                alt="specialty roll"
              ></img>
            );
          })}
        </div>

        <div className="menu-specialty-imgbox">
          {specialtyData.map((content, index) => {
            return (
              <img
                src={content.img}
                className={`menu-specialty-center-img ${
                  index === currentImage ? "active" : ""
                } `}
                key={index}
                alt="specialty roll"
              ></img>
            );
          })}
        </div>

        <div className="menu-specialty-imgbox">
          {specialtyData.map((content, index) => {
            return (
              <img
                src={content.img}
                className={`menu-specialty-left-right-img ${
                  index === getNextImageIndex() ? "active-fade" : ""
                }`}
                onClick={goToNext}
                key={index}
                alt="specialty roll"
              ></img>
            );
          })}
        </div>
      </div>

      <button className="carousel-control-prev" onClick={goToPrevious}>
        &lt;
      </button>
      <button className="carousel-control-next" onClick={goToNext}>
        &gt;
      </button>

      {specialtyData.map((text, index) => {
        return (
          <Fragment key={index}>
            <h2
              className={`menu-specialty-name ${
                index === currentImage ? "active" : ""
              }`}
            >
              {text.name}
            </h2>
            <p
              className={`menu-specialty-content ${
                index === currentImage ? "active" : ""
              }`}
              key={index}
            >
              {text.content}
            </p>
          </Fragment>
        );
      })}
    </div>
  );
}
