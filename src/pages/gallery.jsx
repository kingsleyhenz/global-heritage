import React, { useState } from "react";
import images from "../data/images.json";
import Lightbox from "../components/lightbox";
import "../styles/gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
            onClick={() => handleImageClick(image)}
          >
            <div className="gallery-title">{image.title}</div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={handleClose}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default Gallery;
