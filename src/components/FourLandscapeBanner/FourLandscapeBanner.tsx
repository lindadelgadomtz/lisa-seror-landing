import React from 'react';
import styles from './FourLandscapeBanner.module.scss';

export interface PictureBlock {
    src: string;
    alt: string;
    caption?: string;
}

interface FourLandscapeBannerProps {
    title?: React.ReactNode;
    images: [PictureBlock, PictureBlock, PictureBlock, PictureBlock];
    backgroundImage?: string;
}

const FourLandscapeBanner: React.FC<FourLandscapeBannerProps> = ({ title, images, backgroundImage }) => {
    return (
        <section className={styles.bannerWrapper}
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>

            <div>{title && <h2 className={styles.title}>{title}</h2>}</div>
            <div className={styles.imageRow}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`${styles.imageContainer} ${styles[`image${index + 1}`]}`}
                    >
                        <img src={img.src} alt={img.alt} />
                        {img.caption && <span className={styles.caption}>{img.caption}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FourLandscapeBanner;
