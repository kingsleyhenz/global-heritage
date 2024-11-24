import React, { useState } from "react";
import "../styles/modal.css";

const Modal = ({ monument, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showFullHistory, setShowFullHistory] = useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, []);

    const handleReadMore = () => {
        setShowFullHistory(true);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {isLoading ? (
                    <div className="loader">Loading...</div>
                ) : (
                    <>
                        <div
                            className="modal-image"
                            style={{
                                backgroundImage: `url(${monument.url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
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
                            <button className="map-bt">View Map</button>
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
