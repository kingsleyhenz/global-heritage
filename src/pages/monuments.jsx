import React, { useState } from "react";
import "../styles/monuments.css";
import monumentsData from "../data/images.json";

const Monuments = () => {
  const [filteredMonuments, setFilteredMonuments] = useState(monumentsData);

  const handleFilter = (zone) => {
    const filtered = monumentsData.filter((monument) => monument.zone === zone);
    setFilteredMonuments(filtered);
  };

  return (
    <>
      <div className="monument-content">
        <div className="monument-box">
          {filteredMonuments.map((monument) => (
            <div
              key={monument.id}
              className="monument-card"
              style={{
                backgroundImage: `url(${monument.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-overlay">
                <i className="bi bi-globe"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="filter-bar">
          <p>Filters</p>
          <div className="filters">
            <button onClick={() => handleFilter("North")}>North</button>
            <button onClick={() => handleFilter("East")}>East</button>
            <button onClick={() => handleFilter("West")}>West</button>
            <button onClick={() => handleFilter("South")}>South</button>
          </div>
          <button
            className="sev-won"
            onClick={() => handleFilter("Seven Wonders")}
          >
            Seven Wonders
          </button>
        </div>
      </div>
    </>
  );
};

export default Monuments;
