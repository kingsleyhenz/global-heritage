import React from "react";
import images from "../data/images.json";
import "../styles/gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-hero">
        <h1>GALLERY</h1>
      </div>
      <div className="gallery-content">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-image"
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="gallery-title">{image.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
