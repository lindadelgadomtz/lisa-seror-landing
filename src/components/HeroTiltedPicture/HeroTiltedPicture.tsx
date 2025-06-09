import React, { useEffect } from 'react';
import styles from './HeroTiltedPicture.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroTiltedPicture() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 100,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section className={styles.heroSection}>
            {/* <div
                className={styles.backgroundImage}
                style={{
                    backgroundImage: 'url("/images/lisa_seror_background_textured.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.4,
                    zIndex: 1,
                    position: 'absolute',
                    inset: 0,
                }}
            /> */}
            <div className={styles.textureOverlay} />

            <div
                className={styles.tiltedImageWrapper}

            >
                {/* <img
                    src="/images/old_french_diary_cropped_less.webp"
                    alt="Old French Diary"
                    className={styles.tiltedImage}
                    data-aos="fade"
                    data-aos-delay="100"
                /> */}
            </div>

            {/* <h1
                className={styles.title}
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <span className={styles.titleBackground} style={{
                    backgroundImage: 'url("/images/paper_texture.webp")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.4,
                    filter: 'blur(3px)',
                    transform: 'rotate(-2deg)',
                }}></span>
                _________________________________
            </h1> */}

            {/* <p
                className={styles.subtitle}
                data-aos="fade-left"
                data-aos-delay="600"
            >
                Mon histoire
            </p> */}
        </section>
    );
}
