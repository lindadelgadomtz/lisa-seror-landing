'use client'

import React from 'react';
import styles from './FourSectionSplit.module.scss';
import { useEffect } from 'react';
import AOS from 'aos';

interface SectionData {
    title?: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
}

interface FourSectionSplitProps {
    topLeft: SectionData;
    topRight: SectionData;
    bottomLeft: SectionData;
    bottomRight: SectionData;
}

const FourSectionSplit: React.FC<FourSectionSplitProps> = ({ topLeft, topRight, bottomLeft, bottomRight }) => {
    useAOS();

    return (
        <section className={styles.wrapper}>
            <div className={styles.row}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${topLeft.imageUrl})` }}
                    data-aos="fade-right"
                    data-aos-delay="100"
                />
                <div className={styles.textSection}>
                    <span
                        className={styles.subtitle}
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        {topRight.subtitle}
                    </span>
                    <h2
                        className={styles.title}
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        {topRight.title}
                    </h2>
                    <p
                        className={styles.description}
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        {topRight.description}

                    </p>
                    {/* <button className={styles.button} data-aos="fade-left" data-aos-delay="500">
                        Voir plus
                    </button> */}
                </div>
            </div>

            <div className={styles.row}>
                <div className={`${styles.textSection} ${styles.greydark}`}>
                    <span
                        className={styles.subtitle}
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        {bottomLeft.subtitle}
                    </span>
                    <h2
                        className={styles.title}
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        {bottomLeft.title}
                    </h2>
                    <p
                        className={styles.description}
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        {bottomLeft.description}

                    </p>
                    {/* <button className={styles.button} data-aos="fade-right" data-aos-delay="500">
                        Voir plus
                    </button> */}
                </div>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${bottomRight.imageUrl})` }}
                    data-aos="fade-left"
                    data-aos-delay="100"
                />
            </div>
        </section>
    );
};

export default FourSectionSplit;
function useAOS() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
        return () => {
            AOS.refreshHard();
        };
    }, []);
}

