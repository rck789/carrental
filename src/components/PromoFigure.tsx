import React from 'react';
import styles from '../styles/PromoFigure.module.css';

const PromoFigure = () => {
  return (
    <figure className={styles.promoFigure}>
      <img src="/images/promo/promo-voucher.jpg" alt="Summer Promotion" className={styles.promoImage} />
      <figcaption>
        <div className={styles.captionContent}>
          Receive guaranteed on a monthly hire or lease
          <br />
          <button className={styles.shopNowBtn}>Gift Voucher</button>
        </div>
      </figcaption>
    </figure>
  );
};

export default PromoFigure;
