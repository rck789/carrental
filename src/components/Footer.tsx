import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fContent}>
        <div className={styles.fLogo}>
          <Image
            src="/images/footer/footer-logo.svg"
            alt="Al Habtoor Logo"
            width={150}
            height={50}
          />
          <p>Member of the Al Habtoor Group</p>
        </div>
        <div className={styles.mContent}>
          <div className={styles.mContent1}>
            <div className={styles.m1}>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
              </ul>
            </div>
            <div className={styles.m1}>
              <ul>
                <li>Offers</li>
                <li>Locations</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className={styles.m1}>
              <ul>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Service Request</li>
              </ul>
            </div>
            <div className={styles.m1}>
              <ul>
                <li>Careers</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className={styles.mContent2}>
            <p>Al Habtoor Company</p>
            <ul>
              <li>Hospitality</li>
              <li>Real Estate</li>
              <li>Education</li>
              <li>Publishing</li>
              <li>Automotive</li>
              <li>Vehicle Leasing</li>
            </ul>
          </div>
        </div>
        <div className={styles.frameParent12}>
          <div className={styles.followUsOnWrapper}>
            <div className={styles.followUsOn}>FOLLOW US ON</div>
          </div>
          <div className={styles.socialIconsContainer}>
            <div className={styles.socialIconsWrapper}>
              <Image
                src="/images/footer/social-icons.svg"
                alt="Facebook"
                width={15}
                height={15}
                className={styles.socialIcons}
              />
              <Image
                src="/images/footer/social-icons-1.svg"
                alt="Twitter"
                width={15}
                height={15}
                className={styles.socialIcons}
              />
              <Image
                src="/images/footer/social-icons-2.svg"
                alt="LinkedIn"
                width={15}
                height={15}
                className={styles.socialIcons}
              />
              <Image
                src="/images/footer/social-icons-3.svg"
                alt="Instagram"
                width={15}
                height={15}
                className={styles.socialIcons}
              />
              <Image
                src="/images/footer/social-icons-4.svg"
                alt="YouTube"
                width={15}
                height={15}
                className={styles.socialIcons}
              />
            </div>
            <Image
              src="/images/footer/image-273@2x.png"
              alt="Al Habtoor Group"
              width={100}
              height={50}
              className={styles.image273Icon}
            />
          </div>
        </div>
      </div>
      <div className={styles.cRight}>
        © 2018 Car rental LLC - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
