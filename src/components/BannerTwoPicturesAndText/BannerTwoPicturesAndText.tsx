// components/BannerTwoPicturesAndText/BannerTwoPicturesAndText.tsx
import React from 'react';
import styles from './BannerTwoPicturesAndText.module.scss';

interface Picture {
    src: string;
    alt: string;
}

interface Props {
    titleAbove?: string;
    titleBelow?: string;
    images: Picture[];
}

const BannerTwoPicturesAndText: React.FC<Props> = ({ titleAbove, titleBelow, images }) => {
    return (
        <section className={styles.wrapper}
            style={{
                backgroundImage: `url('/images/full_width_black_banner_textured.webp')`,
                backgroundSize: '100% 130%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className={styles.textCenteringWrapper}>
                {titleBelow && <h2 className={styles.titleBelow} data-aos="fade-up">{titleBelow}</h2>}
            </div>

            <div className={styles.imagesContainer} data-aos="zoom-in-up">
                {images.map((img, index) => (
                    <div key={index} className={styles.imageWrapper}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            className={styles.image}
                            loading={index === 1 ? 'eager' : 'lazy'}
                        />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default BannerTwoPicturesAndText;
