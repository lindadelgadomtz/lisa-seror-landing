'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './TextLeftPictureRight.module.scss';

interface TextLeftPictureRightProps {
    title?: React.ReactNode;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
}

const TextLeftPictureRight: React.FC<TextLeftPictureRightProps> = ({
    title,
    subtitle,
    description,
    imageUrl,
}) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
        AOS.refresh();

        const handleScroll = () => AOS.refresh();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.textBlock}>
                    {subtitle && <h3 className={styles.subtitle} data-aos="fade-up">{subtitle}</h3>}
                    <h2 className={styles.title} data-aos="fade-up" data-aos-delay="100">{title}</h2>
                    <p className={styles.description} data-aos="fade-up" data-aos-delay="200">{description}</p>
                </div>
                <div className={styles.imageWrapper} data-aos="fade-left" data-aos-delay="300">
                    <img src={imageUrl} alt="Image illustrating the text block" className={styles.image} loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default TextLeftPictureRight;
