import React, { useState, useEffect } from "react";
import "../styles/modal.css";

const Modal = ({ monument, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showFullHistory, setShowFullHistory] = useState(false);
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, []);

    const handleReadMore = () => {
        setShowFullHistory(true);
    };

    const handleViewMap = () => {
        setShowMap(true);
    };

    const handleViewImage = () => {
        setShowMap(false);
    };

    useEffect(() => {
        if (showMap) {
            console.log("Map URL: ", monument.map);
        }
    }, [showMap, monument.map]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {isLoading ? (
                    <div className="loader">Loading...</div>
                ) : (
                    <>
                        <div className="modal-image">
                            {showMap ? (
                                <iframe
                                    src={monument.map}
                                    title="Google Map"
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div
                                    style={{
                                        backgroundImage: `url(${monument.url})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "100%",
                                    }}
                                ></div>
                            )}
                        </div>
                        <div className="modal-text">
                            <h2>Monument: {monument.title}</h2>
                            <p>Location: {monument.location}</p>
                            <p>Zone: {monument.zone}</p>
                            <p>
                                {showFullHistory
                                    ? monument.history
                                    : monument.history.length > 100
                                    ? monument.history.substring(0, 100) + "..."
                                    : monument.history}
                            </p>
                            {monument.history.length > 100 && !showFullHistory && (
                                <button className="read-more" onClick={handleReadMore}>
                                    Read More
                                </button>
                            )}
                            {showMap ? (
                                <button className="map-bt" onClick={handleViewImage}>
                                    View Image
                                </button>
                            ) : (
                                <button className="map-bt" onClick={handleViewMap}>
                                    View Map
                                </button>
                            )}
                        </div>
                        <button onClick={onClose} className="close-btn">
                            &#10005;
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
