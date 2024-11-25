import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/navigation.css';
import logo from "../assets/gh-one.png";

const NavigationBar = () => {
    const location = useLocation();
    const [isVisitorCountExpanded, setIsVisitorCountExpanded] = useState(false);
    const [visitorCount, setVisitorCount] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem("visited")) {
            const count = localStorage.getItem("visitorCount");
            const newCount = count ? parseInt(count, 10) + 1 : 1;
            setVisitorCount(newCount);
            localStorage.setItem("visitorCount", newCount);
            sessionStorage.setItem("visited", "true");
        } else {
            setVisitorCount(parseInt(localStorage.getItem("visitorCount"), 10) || 0);
        }
    }, []);

    const handleVisitorCountClick = () => {
        setIsVisitorCountExpanded(prevState => !prevState);
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="nav">
            <div className="nav-title">
                <img src={logo} alt="Global Heritage" title="Global Heritage" />
            </div>
            <div className="nav-options">
                <Link to="/" id={location.pathname === "/" ? "active-link" : ""}>Home</Link>
                <Link to="/monuments" id={location.pathname === "/monuments" ? "active-link" : ""}>Monuments</Link>
                <Link to="/gallery" id={location.pathname === "/gallery" ? "active-link" : ""}>Gallery</Link>
                <Link to="/contact-us" id={location.pathname === "/contact-us" ? "active-link" : ""}>Contact Us</Link>
                <Link to="/feedback" id={location.pathname === "/feedback" ? "active-link" : ""}>Feedback</Link>
            </div>
            <div className="visitor-count">
                <i className="bi bi-list" onClick={handleSidebarToggle}></i> {/* Toggle sidebar on click */}
                <p 
                    onClick={handleVisitorCountClick} 
                    style={{ padding: isVisitorCountExpanded ? "4% 10%" : "4%", fontSize: isVisitorCountExpanded ? "13px" : "16px" }}
                >
                    {isVisitorCountExpanded ? `Visitors Count: ${visitorCount}` : "VC"}
                </p>
            </div>

            
            {isSidebarOpen && (
                <div className={`nav-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <i className="bi bi-x-circle-fill" onClick={closeSidebar}></i>
                    <Link to="/" id="side-link" onClick={closeSidebar}>Home</Link>
                    <Link to="/monuments" id="side-link" onClick={closeSidebar}>Monuments</Link>
                    <Link to="/gallery" id="side-link" onClick={closeSidebar}>Gallery</Link>
                    <Link to="/contact-us" id="side-link" onClick={closeSidebar}>Contact Us</Link>
                    <Link to="/feedback" id="side-link" onClick={closeSidebar}>Feedback</Link>
                    <p id="side-vc" style={{width: "45%", fontSize: '15px'}}>Visitors Count: {visitorCount}</p>
                </div>
            )}
        </div>
    );
};

export default NavigationBar;
