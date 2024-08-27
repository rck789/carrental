import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles//BookingSection.module.css';

const BookingSection: React.FC = () => {

  const [isQuickBookContentVisible, setQuickBookContentVisible] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false); // State to track button click

  // useEffect to add/remove event listener on mount/unmount
  useEffect(() => {
    const quickBookButton = document.querySelector(`.${styles.quickBookBtn}`);
    
    // Function to toggle the visibility of the content
    const toggleBookingContent = () => {
      setQuickBookContentVisible((prevState) => !prevState);
      setButtonClicked((prevState) => !prevState); // Toggle button color on click
    };

    // Add event listener to the button
    quickBookButton?.addEventListener('click', toggleBookingContent);

    // Cleanup function to remove the event listener on unmount
    return () => {
      quickBookButton?.removeEventListener('click', toggleBookingContent);
    };
  }, []);


  
  return (
    <>
    <div className={styles.bookingSection}>
      <div className={styles.bookingForm}>
        <ul className={styles.bookingTabs}>
          <li className={`${styles.tab} ${styles.active1}`}>Same as Pick-Up</li>
          <li className={styles.tab}>Different Drop-Off</li>
          <li className={styles.tab}>
            <select className={styles.vehicleTypeDropdown}>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="luxury">Luxury</option>
              <option value="van">Van</option>
              <option value="minibus">Minibus</option>
            </select>
          </li>
        </ul>
      </div>
      <div className={styles.quickBookContainer}>
        <div className={styles.locationSelect}>
          <select className={styles.locationDropdown}>
            <option value="dubai">Dubai</option>
            <option value="abu-dhabi">Abu Dhabi</option>
            <option value="sharjah">Sharjah</option>
            <option value="fujairah">Fujairah</option>
            <option value="ras-al-khaimah">Ras Al Khaimah</option>
            <option value="al-quoz">Al Quoz</option>
          </select>
        </div>
        <div className={styles.dateTimeSelect}>
          <input
            type="datetime-local"
            className={styles.datetimePicker}
            placeholder="Pick-Up Date and Time"
          />
        </div>
        <div className={styles.dateTimeSelect}>
          <input
            type="datetime-local"
            className={styles.datetimePicker}
            placeholder="Drop-Off Date and Time"
          />
        </div>
        <div className={styles.searchIcon}>
          <button className={styles.searchBtn}>
            <img src="/images/booking/-ico.svg" className="fa fa-search" alt="Search Icon" />
          </button>
        </div>
        <div className={styles.brdr}>
          <p />
        </div>
        <div className={styles.quickBookButton}>
          <button className={styles.quickBook}>Quick Book</button>
        </div>
      </div>
      <div className={styles.appDownload}>
        <p>Download our App for easy accessibility anytime, anywhere!</p>
        <div className={styles.appButtons}>
          <img src="/images/booking/app-store.svg" alt="App Store" />
          <img src="/images/booking/play-store.svg" alt="Google Play" />
        </div>
      </div>
    </div>

    <div className={styles.mobileBook}>
      <div className={styles.bookingButtons}>
        <button className={styles.quickBook}>Book a Car</button>
        <button className={`${styles.quickBook} ${styles.quickBookBtn}`} style={{ 
              backgroundColor: isButtonClicked ? 'white' : '', // Change the color here
              color: isButtonClicked ? 'red' : 'white', // Change text color for better contrast
              border: isButtonClicked ? 'red 1px solid': 'none' ,
            }}>
          Quick Book
        </button>
      </div>
      <div
        className={styles.quickBookContent}
        style={{ display: isQuickBookContentVisible ? 'block' : 'none' }}
      >
        <div className={styles.locationSelect}>
          <select className={styles.locationDropdown}>
            <option value="dubai">Dubai</option>
            <option value="abu-dhabi">Abu Dhabi</option>
            <option value="sharjah">Sharjah</option>
            <option value="fujairah">Fujairah</option>
            <option value="ras-al-khaimah">Ras Al Khaimah</option>
            <option value="al-quoz">Al Quoz</option>
          </select>
        </div>
        <div className={styles.dateTimeSelect}>
          <input
            type="datetime-local"
            className={styles.datetimePicker}
            placeholder="Pick-Up Date and Time"
          />
        </div>
        <div className={styles.dateTimeSelect}>
          <input
            type="datetime-local"
            className={styles.datetimePicker}
            placeholder="Drop-Off Date and Time"
          />
        </div>
        <button className={styles.srch}>Search</button> 
      </div>
    </div>
  </>
  );
};

export default BookingSection;
