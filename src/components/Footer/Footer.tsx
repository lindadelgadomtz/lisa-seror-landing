import React from 'react';
import styles from './Footer.module.scss';
//import { useRouter } from 'next/router';
import { FaArrowUp, FaFacebookF } from 'react-icons/fa6';

const Footer: React.FC = () => {
    //const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.overlay} />
            <div className={styles.footerContent}>
                <div className={styles.links}>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={styles.link}>CGU</a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <FaFacebookF className={styles.icon} />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={styles.link}>CGU</a>
                </div>
                <div className={styles.bottomBar}>
                    <span>Hestia Innovations © {new Date().getFullYear()} - Tous droits réservés</span>
                    <button onClick={scrollToTop} className={styles.scrollTopButton}>
                        <FaArrowUp className={styles.icon} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;