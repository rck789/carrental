// components/SubscribeApp.tsx

import React from "react";
import styles from "../styles/SubscribeSection.module.css";

const SubscribeSection: React.FC = () => {
  return (
    <div className={styles.susCont}>
      <div className={styles.susInputs}>
        <h2>Subscribe here for exclusive offers and updates!</h2>
        <div className={styles.inputs}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            className={styles.inputField}
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            className={styles.inputField}
          />
        </div>
        <p>
          Don't miss out! Enter your email and your name, then hit subscribe to
          unlock a world of special offers and details.
        </p>
        <button type="button" className={styles.subscribeBtn}>
          Subscribe
        </button>
      </div>
      <div className={styles.susApps}>
        <img
          src="/images/subscribe/susPhone.svg"
          alt="Phone with app"
          className={styles.appImage}
        />
        <div className={styles.appDetails}>
          <p>Enter your number and receive a direct link to download the app</p>
          <input
            type="tel"
            id="phonenum"
            name="phonenum"
            required
            placeholder="Enter Phone Number"
            className={styles.phoneInput}
          />
          <button type="button" className={styles.getLinkBtn}>
            Get the Link
          </button>
          <div className={styles.appstoreBtns}>
            <p>Get it on</p>
            <img
              src="/images/subscribe/susApp.svg"
              alt="Button to App Store Page"
              className={styles.appstoreBtn}
            />
            <img
              src="/images/subscribe/susPlay.svg"
              alt="Button to Play Store Page"
              className={styles.appstoreBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;


