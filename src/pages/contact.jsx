import React from "react";
import { Link } from "react-router-dom";
import '../styles/contact.css'

const Contact = () => {
    return (
        <>
            <div className="contact-content">
                <div className="geo-loc">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6189454007385!2d7.027020374089733!3d4.8353127404777325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d1dfb38824ed%3A0xac41bee066e6dbec!2sAptech%20Computer%20Education%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1731528262720!5m2!1sen!2sng"
                        width="600"
                        height="450"
                        style={{ border: 0, width: '100%', height: '100%', borderRadius: '15px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="contact-details">
                    <h2>Contact Us</h2>
                    <div className="contact-features">
                        <div className="contact-card">
                            <i class="bi bi-phone-vibrate"></i>
                            <div className="contact-card-info">
                                <h3>Phone</h3>
                                <p>08145516621</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <i class="bi bi-geo-alt"></i>
                            <div className="contact-card-info">
                                <h3>Location</h3>
                                <p>Port-Harcourt, Nigeria</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <i class="bi bi-github"></i>
                            <div className="contact-card-info">
                                <h3>GitHub</h3>
                                <p>kingsleyhenz</p>
                            </div>
                        </div>
                        <Link to="mailto:globalheritage@gmail.com" className="mail-link">Mail Us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;