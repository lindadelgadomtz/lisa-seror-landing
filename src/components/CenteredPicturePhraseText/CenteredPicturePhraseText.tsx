import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './CenteredPicturePhraseText.module.scss';

interface CenteredPicturePhraseTextProps {
  imageUrl: string;
  imageHeight?: string;
  imageWidth?: string;
  phrase: React.ReactNode;
  details?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CenteredPicturePhraseText: React.FC<CenteredPicturePhraseTextProps> = ({
  imageUrl,
  imageHeight = '800px',
  imageWidth = '480px',
  phrase,
  details,
  buttonText = 'En savoir plus',
  onButtonClick,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className={styles.wrapper}>
      <div
        className={styles.inner}
        style={{ height: imageHeight, width: imageWidth }}
        data-aos="fade-up"
      >
        <h2
          className={`${styles.phrase} ${styles.typewriter}`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {phrase}
        </h2>
        <img
          src={imageUrl}
          alt="Sportif en action"
          className={styles.image}
          data-aos="zoom-in"
          data-aos-delay="400"
          loading="lazy"
        />
        {/* <div className={styles.detailsBox} data-aos="fade-up" data-aos-delay="600">
          <p className={styles.detailsText}>{details}</p>
          {onButtonClick && (
            <button className={styles.button} onClick={onButtonClick}>
              {buttonText}
            </button>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default CenteredPicturePhraseText;
