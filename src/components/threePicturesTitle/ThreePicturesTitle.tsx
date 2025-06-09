import React from 'react';
import styles from './ThreePicturesTitle.module.scss';

interface ThreePicturesTitleProps {
  mainImage: string;
  topTitle: string;
  bottomTitle: string;
  sideImageOne: string;
  sideImageTwo: string;
  imageOnLeft?: boolean;
  titleAboveImages?: boolean;
  theme?: 'dark' | 'light';
}

const ThreePicturesTitle: React.FC<ThreePicturesTitleProps> = ({
  mainImage,
  topTitle,
  bottomTitle,
  sideImageOne,
  sideImageTwo,
  imageOnLeft = true,
  titleAboveImages = true,
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';

  return (
    <section className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}
      style={{
        backgroundImage: `url('/images/lisa_seror_background_textured.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center -150px',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className={`${styles.inner} ${imageOnLeft ? '' : styles.reverse}`}>
        <div
          className={`${styles.mainImageWrapper} ${imageOnLeft ? styles.tightRight : styles.tightLeft
            }`}
        >
          <img src={mainImage} alt="Main" className={styles.mainImage} loading="lazy" />
        </div>
        <div className={styles.rightContent}>
          {titleAboveImages && (
            <div className={styles.titleBlock}>
              <h2 className={styles.topTitle}>{topTitle}</h2>
              <h2 className={styles.bottomTitle}>{bottomTitle}</h2>
            </div>
          )}
          <div className={styles.sideImages}>
            <div className={styles.sideImageWrapper} data-aos="fade-up">
              <img
                src={sideImageOne}
                alt="Side one"
                className={styles.sideImage}
                loading="lazy"
              />
              <p className={styles.sideImageCaption}>First artwork title or description</p>
            </div>
            <div className={styles.sideImageWrapper} data-aos="fade-up" data-aos-delay="100">
              <img
                src={sideImageTwo}
                alt="Side two"
                className={styles.sideImage}
                loading="lazy"
              />
              <p className={styles.sideImageCaption}>Second artwork title or description</p>
            </div>

          </div>
          {!titleAboveImages && (
            <div className={styles.titleBlock}>
              <h2 className={styles.topTitle}>{topTitle}</h2>
              <h2 className={styles.bottomTitle}>{bottomTitle}</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ThreePicturesTitle;
