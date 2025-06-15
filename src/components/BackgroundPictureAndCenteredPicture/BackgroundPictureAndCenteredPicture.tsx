'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './BackgroundPictureAndCenteredPicture.module.scss';

interface Props {
    backgroundImageUrl: string;
    centeredImageUrl: string;
    centeredImageAlt?: string;
}

const BackgroundPictureAndCenteredPicture: React.FC<Props> = ({
    backgroundImageUrl,
    centeredImageUrl,
    centeredImageAlt = "L'autre",
}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        setTimeout(() => setLoaded(true), 100); // Delay to allow AOS to apply
    }, []);

    return (
        <section
            className={styles.section}
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            aria-label="Artistic section with background and foreground image"
        >
            <div className={styles.overlay}>
                <div className={styles.container}>

                    <div className={styles.stackContainer}>
                        <div className={styles.centeredImageWrapper}>
                            <img
                                src={centeredImageUrl}
                                alt={centeredImageAlt}
                                className={`${styles.centeredImage} ${loaded ? styles.animate : ''}`}
                            />
                            <span className={styles.imageCaption}>{centeredImageAlt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default BackgroundPictureAndCenteredPicture;
