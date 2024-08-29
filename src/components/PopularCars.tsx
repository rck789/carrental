import styles from "../styles/PopularCars.module.css";

const PopularCars: React.FC = () => {
  return (
    <div className={styles.popularCars}>
      <h2>Most Popular Cars</h2>
      <div className={styles.flexContainer}>
        <div className={styles.carContainer}>
          <div className={styles.carImage}>
            <img
              src="/images/popularcars/car-eclipse.jpg"
              alt="Mitsubishi Eclipse"
              className={styles.carimage}
            />
          </div>
          <div className={styles.carDeets}>
            <h3>Mitsubishi Eclipse</h3>
            <p className={styles.carp}>
              Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV
              mobility with signature Mitsubishi styling, technology and driving
              confidence.
            </p>
            <div className={styles.carFeat}>
              <ul>
                <li className={styles.carFeatIco}>
                  <img src="/images/popularcars/vec-seat.svg" alt="" />
                  <p>6 People</p>
                </li>
              </ul>
              <ul>
                <li className={styles.carFeatIco}>
                  <img src="/images/popularcars/vec-gear.svg" alt="" />
                  <p>Automatic</p>
                </li>
              </ul>
              <ul>
                <li className={styles.carFeatIco}>
                  <img src="/images/popularcars/vec-door.svg" alt="" />
                  <p>5 Doors</p>
                </li>
              </ul>
              <ul>
                <li className={styles.carFeatIco}>
                  <img src="/images/popularcars/vec-ac.svg" alt="" />
                  <p>AC</p>
                </li>
              </ul>
            </div>
            <div className={styles.carBk}>
              <h4>AED 2700/ Monthly</h4>
              <button className={styles.carBook}>
                <p>Book Now</p>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.carContainer}>
          <div className={styles.carImage}>
            <img
              src="/images/popularcars/car-jac.jpg"
              alt="Jac J7"
              className={styles.carimage}
            />
          </div>
          <div className={styles.carDeets}>
            <h3>Jac J7</h3>
            <p className={styles.carp}>
              S3 Plus has been rated Five-Star in C-NCAP including front impact,
              side impact, frontal side impact & Whipping test.
            </p>
            <div className={styles.carFeat}>
              <ul>
                <li className={`${styles.carFeatIco} ${styles.ico1}`}>
                  <img src="/images/popularcars/vec-seat.svg" alt="" />
                  <p>6 People</p>
                </li>
              </ul>
              <ul>
                <li className={`${styles.carFeatIco} ${styles.ico2}`}>
                  <img src="/images/popularcars/vec-gear.svg" alt="" />
                  <p>Automatic</p>
                </li>
              </ul>
              <ul>
                <li className={`${styles.carFeatIco} ${styles.ico3}`}>
                  <img src="/images/popularcars/vec-door.svg" alt="" />
                  <p>5 Doors</p>
                </li>
              </ul>
              <ul>
                <li className={`${styles.carFeatIco} ${styles.ico4}`}>
                  <img src="/images/popularcars/vec-ac.svg" alt="" />
                  <p>AC</p>
                </li>
              </ul>
            </div>
            <div className={styles.carBk}>
              <h4>AED 2700/ Monthly</h4>
              <button className={styles.carBook}>
                <p>Book Now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCars;
