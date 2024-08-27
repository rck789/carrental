import React from "react";
import styles from "../styles/Locations.module.css";

const locations = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Fujairah",
  "Ras Al Khaimah",
];

const Locations: React.FC = () => {
  return (
    <>
      <div className={styles.locations}>
        <h2>Locations</h2>
        <div className={styles.locs}>
          <ul>
            {locations.map((location) => (
              <li key={location}>
                <img src="/images/location/location-ico.svg" alt={location} />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Locations;
