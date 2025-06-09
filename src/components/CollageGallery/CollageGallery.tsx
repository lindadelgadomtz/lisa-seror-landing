// CollageGallery.tsx
import React from 'react';
import styles from './CollageGallery.module.scss';

export interface CollageItem {
    id: string;
    type: 'image' | 'text';
    src?: string;
    alt?: string;
    text?: string;
    hoverLabel?: string;
    size?: 'portrait' | 'landscape' | 'square';
}

interface CollageGalleryProps {
    title?: string;
    items: CollageItem[];
    backgroundImageUrl?: string;
}

const CollageGallery: React.FC<CollageGalleryProps> = ({ title, items, backgroundImageUrl }) => {
    return (
        <section
            className={styles.galleryWrapper}
            style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined }}
        >
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`${styles.card} ${item.size ? styles[item.size] : ''}`}
                        >
                            {item.type === 'image' && item.src ? (
                                <>
                                    <img src={item.src} alt={item.alt || ''} loading="lazy" />
                                    {item.hoverLabel && (
                                        <span className={styles.hoverLabel}>{item.hoverLabel}</span>
                                    )}
                                </>
                            ) : (
                                <div className={styles.textCard}>{item.text}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollageGallery;