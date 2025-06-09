'use client';

import React, { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './IrregularBackgroundAndText.module.scss';

interface IrregularBackgroundAndTextProps {
    text?: ReactNode;
    backgroundImageUrl?: string;
}

const IrregularBackgroundAndText: React.FC<IrregularBackgroundAndTextProps> = ({
    text,
    backgroundImageUrl = '/images/banner_black_scratches.png',
}) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    }, []);

    return (
        <section
            className={styles.section}
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            aria-label="Artistic background section"
        >
            <div className={styles.overlay}>
                <h2 className={styles.text} data-aos="fade-up">
                    {text}
                </h2>
            </div>
        </section>
    );
};

export default IrregularBackgroundAndText;
