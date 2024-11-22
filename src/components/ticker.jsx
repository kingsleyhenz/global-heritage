import React, { useState, useEffect } from "react";
import "../styles/Ticker.css";

const Ticker = () => {
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      const formattedDate = now.toLocaleDateString(undefined, options);
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate}, ${formattedTime}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchLocation = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        if (data.address) {
          const { city, state, country } = data.address;
          setLocation(`${city || "Unknown City"}, ${state || "Unknown State"}, ${country}`);
        } else {
          setLocation("Unable to fetch exact location.");
        }
      } catch (error) {
        setLocation("Error fetching location.");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocation(latitude, longitude);
        },
        () => setLocation("Location access denied.")
      );
    } else {
      setLocation("Geolocation not supported.");
    }
  }, []);

  return (
    <div className="ticker">
      <div className="ticker-content">
        <span>{dateTime}</span>
        <span> | </span>
        <span>{location}</span>
      </div>
    </div>
  );
};

export default Ticker;
