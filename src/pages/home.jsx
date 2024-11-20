import React, { useEffect, useState } from "react";
import "../styles/home.css"
import CarouselSlider from "../components/carousel";
import carouselData from "../data/images.json";

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
                setIsAnimating(false);
            }, 800);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="home-content">
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${carouselData[currentIndex].url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className={`hero-text ${isAnimating ? "fade-out" : "fade-in"}`}>
                    <h1>{carouselData[currentIndex]["hero-text"]}</h1>
                    <p>{carouselData[currentIndex]["hero-sub"]}</p>
                </div>
            </div>

                <div className="hero-info">
                    <div className="info-text">
                        <h2>A Journey Through History's Wonders</h2>
                        <p>Explore Global Heritage, where the world's most iconic monuments await. From the ancient Pyramids of Egypt to the breathtaking ruins of Machu Picchu, each site tells a story of human achievement. Discover the Seven Wonders of the World—like the Colosseum, Petra, and the Taj Mahal—alongside countless other landmarks that connect us to the past. Join us and experience the beauty and legacy of these remarkable sites across continents.</p>
                    </div>
                    <div className="info-card-wrap">
                        <div className="when-card">
                            <div className="when-card-icon">
                                <i class="bi bi-hourglass-split"></i>
                            </div>
                            <div className="when-card-text">
                                <h3>WHEN</h3>
                                <p>History is not just in the past—it's alive today. From ancient civilizations to modern wonders, each monument stands as a timeless reminder of human achievement across the ages.</p>
                            </div>
                        </div>
                        <div className="when-card">
                            <div className="when-card-icon">
                                <i class="bi bi-globe-asia-australia"></i>
                            </div>
                            <div className="when-card-text">
                                <h3>WHERE</h3>
                                <p>Across every continent, from the deserts of Egypt to the jungles of South America, historical monuments are scattered, telling the story of humanity’s diverse cultures and rich heritage.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-overview">
                    <div className="hero-overview-text">
                        <p>WHY WE DO THIS?</p>
                        <h2>STAYING CONNECTED TO OUR ROOTS VIA <span>HOSTORIC MONUMENTS</span></h2>
                        <p className="ov-text-two">Historic monuments are more than just structures—they’re symbols of our shared past, holding stories of courage, creativity, and resilience. By exploring these sites through Global Heritage, we stay connected to our roots, learning about the triumphs and struggles that shaped civilizations. This connection fosters a deeper appreciation for our heritage and reminds us of the cultural richness that unites us. Our website bridges the gap between past and present, allowing everyone to explore, learn, and cherish the world’s most remarkable monuments from anywhere.</p>
                    </div>
                    <div className="overview-gallery">
                        <div className="ov-gallery-img"></div>
                        <div className="ov-gallery-img"></div>
                        <div className="ov-gallery-img"></div>
                        <div className="ov-gallery-img"></div>
                    </div>
                </div>

                <div className="learning">
                    <h2>WHAT WILL YOU FIND</h2>
                    <div className="learn-card-box">
                        <div className="learn-box">
                            <div className="learn-icon">
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                            <h3>Monuments by Region</h3>
                            <p>Discover historical monuments categorized by region—East, North, West, and South—each with rich details and stories. Navigate easily to explore iconic landmarks from every corner of the world.</p>
                        </div>
                        <div className="learn-box">
                            <div className="learn-icon">
                                <i class="bi bi-gem"></i>
                            </div>
                            <h3>Seven Wonders of the World</h3>
                            <p>Dive into the history and marvel of the Seven Wonders. Each wonder has its own story, unique architecture, and cultural impact, offering a glimpse into the achievements of ancient civilizations.</p>
                        </div>
                        <div className="learn-box">
                            <div className="learn-icon">
                                <i class="bi bi-file-image-fill"></i>
                            </div>
                            <h3>Interactive Gallery</h3>
                            <p>Enjoy a stunning visual gallery where each image captures the essence of these timeless sites. Click on any monument to view it in full detail, making the experience both immersive and informative.</p>
                        </div>
                    </div>
                </div>

                <div className="hero-quote">
                    <i class="bi bi-quote"></i>
                    <p>When we build, let us think that we build forever. Let it not be for present delight nor for present use alone; let it be such work <br /> as our descendants will thank us for, and let us think, as we lay stone on stone, that a time is to come when those stones will be held sacred <br /> because our hands have touched them, and that men will say, as they look upon the labor and wrought substance of them, <br /> See! this our fathers did for us.</p>
                    <h4>John Ruskin (1819 – 1900)</h4>
                </div>
            </div>
        </>
    )
}

export default HomePage;