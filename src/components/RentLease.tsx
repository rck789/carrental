import React from "react";
import styles from "../styles/RentLease.module.css";

const RentLease: React.FC = () => {
  return (
    <div className={styles.rentLease}>
      <h2>Rent/Lease in three easy steps</h2>
      <div className={styles.rentLeaseBody}>
        <div className={styles.step}>
          <h2>01</h2>
          <div className={styles.rentLeaseCard}>
            <img
              className={styles.rentLeaseImage}
              src="/images/rentlease/renlease01.svg"
              alt="Step 1"
              loading="lazy"
              height="1em"
            />
            <p className={styles.rentLeaseText}>
              Select the location. Browse through our available options and find
              the perfect car to suit your needs.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <h2>02</h2>
          <div className={styles.rentLeaseCard}>
            <img
              className={styles.rentLeaseImage}
              src="/images/rentlease/renlease02.svg"
              alt="Step 2"
              loading="lazy"
              height="1em"
            />
            <p className={styles.rentLeaseText}>
              Choose your desired Pick-Up date and time.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <h2>03</h2>
          <div className={styles.rentLeaseCard}>
            <img
              className={styles.rentLeaseImage}
              src="/images/rentlease/renlease03.svg"
              alt="Step 3"
              loading="lazy"
              height="1em"
            />
            <p className={styles.rentLeaseText}>
              Make payment and book the car. Select an option to either have the
              car delivered to your location or pick it up directly from us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentLease;
