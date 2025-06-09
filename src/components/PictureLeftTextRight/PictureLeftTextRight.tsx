'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './PictureLeftTextRight.module.scss';

interface PictureLeftTextRightProps {
    title?: string;
    subtitle?: string;
    description?: string;
    imageUrl: string;
}

const PictureLeftTextRight: React.FC<PictureLeftTextRightProps> = ({
    title,
    subtitle,
    description,
    imageUrl,
}) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    }, []);

    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.imageWrapper} data-aos="fade-right" data-aos-delay="200">
                    <img src={imageUrl} alt={title} className={styles.image} loading="lazy" />
                </div>
                <div className={styles.textBlock}>
                    {subtitle && <h3 className={styles.subtitle} data-aos="fade-up">{subtitle}</h3>}
                    <h2 className={styles.title} data-aos="fade-up" data-aos-delay="100">{title}</h2>
                    <p className={styles.description} data-aos="fade-up" data-aos-delay="200">{description}</p>
                </div>
            </div>
        </section>
    );
};

export default PictureLeftTextRight;
