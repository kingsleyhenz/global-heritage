import React, { useState, useEffect } from "react";
import carouselData from "../data/images.json";
import "../styles/carousel.css";

const CarouselSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
            <div
                className="carousel-slide"
                style={{
                    backgroundImage: `url(${carouselData[currentIndex].url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
            </div>
    );
};

export default CarouselSlider;
