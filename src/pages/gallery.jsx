import React, { useState } from "react";
import images from "../data/images.json";
import "../styles/gallery.css";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="gallery-container">
      <div className="slider-wrapper">
        <div
          className="image-slider"
          style={{
            transform: `translateX(-${currentIndex * 330}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-div ${index === currentIndex ? "active" : "inactive"}`}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            >
              {index === currentIndex && (
                <div className="image-title-overlay">
                  <p>{image.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button
          className="arrow left"
          onClick={handleLeftClick}
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>
        <button
          className="arrow right"
          onClick={handleRightClick}
          disabled={currentIndex === images.length - 1}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
