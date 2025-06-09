// components/ThreeCenteredPicturesAndUnderPhrase/ThreeCenteredPicturesAndUnderPhrase.tsx
import React from 'react';
import styles from './ThreeCenteredPicturesAndUnderPhrase.module.scss';

interface Picture {
    src: string;
    alt: string;
}

interface Props {
    titleAbove?: string;
    titleBelow?: string;
    images: Picture[]; // Must contain exactly 3 images
}

const ThreeCenteredPicturesAndUnderPhrase: React.FC<Props> = ({ titleAbove, titleBelow, images }) => {
    return (
        <section className={styles.wrapper}
            style={{
                backgroundImage: `url('/images/lisa_seror_background_textured.webp')`,
                backgroundSize: '100% 130%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            {titleAbove && <h2 className={styles.titleAbove} data-aos="fade-up">{titleAbove}</h2>}


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

            {titleBelow && <h2 className={styles.titleBelow} data-aos="fade-up">{titleBelow}</h2>}
        </section>
    );
};

export default ThreeCenteredPicturesAndUnderPhrase;
