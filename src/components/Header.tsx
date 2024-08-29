import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export const Header = () => {
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navMenuRef = useRef<HTMLUListElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    const navMenu = navMenuRef.current;
    const overlay = overlayRef.current;

    const handleMenuToggle = () => {
      if (navMenu && mobileMenu && overlay) {
        navMenu.classList.toggle(styles.open);
        mobileMenu.classList.toggle(styles.menuOpen);
        overlay.classList.toggle(styles.show);
      }
    };

    const handleOverlayClick = () => {
      if (navMenu && overlay) {
        navMenu.classList.remove(styles.open);
        overlay.classList.remove(styles.show);
      }
    };

    if (mobileMenu) {
      mobileMenu.addEventListener("click", handleMenuToggle);
    }

    if (overlay) {
      overlay.addEventListener("click", handleOverlayClick);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (mobileMenu) {
        mobileMenu.removeEventListener("click", handleMenuToggle);
      }
      if (overlay) {
        overlay.removeEventListener("click", handleOverlayClick);
      }
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navi_social}>
          <ul>
            <li>
              <a href="https://m.facebook.com/Diamondlease/">
                <img src="/images/header/fb-ico.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/diamondlease">
                <img src="/images/header/ico-insta.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://x.com/diamondlease">
                <img src="/images/header/ico-x.svg" alt="X" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/diamondlease/">
                <img src="/images/header/ico-lnkdn.svg" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src="/images/header/Logo.svg" alt="Car Rental" />
          </div>
          <div className={styles.menu_toggle} ref={mobileMenuRef}>
            <span className={styles.menu_bar} />
            <span className={styles.menu_bar} />
            <span className={styles.menu_bar} />
          </div>
          <nav>
            <ul className={styles.nav_menu} ref={navMenuRef}>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Corporate</a>
              </li>
              <li>
                <a href="#">Personal</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#" className={styles.noti}>
                  <img src="/images/header/noti-ico-2.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#" className={`${styles.btn} ${styles.jhon}`}>
                  <img src="/images/header/jhon-ico.svg" alt="" />
                  John Doe
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className={styles.navmsg}>
          <span>
            Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis &amp; Habtoor
            Grand Sales Counters | All Rates inclusive of VAT. T&amp;C’s apply |
            Follow us on Social Media for New Offers
          </span>
        </p>
      </header>
      <div className={`${styles.overlay} ${styles.show}`} ref={overlayRef} />
    </>
  );
};
