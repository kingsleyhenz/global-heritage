import React from "react";
import "../styles/lightbox.css"; // Include your modal styles here

const Lightbox = ({ image, onClose, isModalOpen }) => {
  return (
    <div className={`lightbox-overlay ${isModalOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.url} alt={image.title} className="lightbox-image" />
        <p className="image-title">{image.title}</p>
        <button className="close-btn" onClick={onClose}>
          <i className="bi bi-x-circle-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
