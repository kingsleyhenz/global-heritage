import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/navigation.css';
import logo from "../assets/gh-one.png";

const NavigationBar = () => {
    const location = useLocation();

    return (
        <>
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
                    <img src={logo} alt="" className="vc-logo"/>
                    <p>VC</p>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
