import React from 'react';
import styles from './SixPicturesMirrored.module.scss';

interface PictureBlock {
    src: string;
    alt: string;
    caption: string;
}

interface SixPicturesMirroredProps {
    leftTop?: [PictureBlock?, PictureBlock?];
    leftBottom?: PictureBlock;
    rightTop?: PictureBlock;
    rightBottom?: [PictureBlock?, PictureBlock?];
    rightExtra?: PictureBlock;
    backgroundImage?: string;
}

const SixPicturesMirrored: React.FC<SixPicturesMirroredProps> = ({
    leftTop = [],
    leftBottom,
    rightTop,
    rightBottom = [],
    rightExtra,
    backgroundImage,
}) => {
    return (
        <section
            className={styles.wrapper}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className={styles.gridContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.leftTop}>
                        {leftTop[0] && leftTop[1] ? (
                            <>
                                <div className={styles.imageWrapper}>
                                    <img src={leftTop[0].src} alt={leftTop[0].alt} />
                                    <span className={styles.caption}>{leftTop[0].caption}</span>
                                </div>
                                <div className={styles.imageWrapper}>
                                    <img src={leftTop[1].src} alt={leftTop[1].alt} />
                                    <span className={styles.caption}>{leftTop[1].caption}</span>
                                </div>
                            </>
                        ) : leftTop[0] ? (
                            <>
                                <div className={styles.imageWrapper}><div className={styles.placeholder} /></div>
                                <div className={styles.imageWrapper}>
                                    <img src={leftTop[0].src} alt={leftTop[0].alt} />
                                    <span className={styles.caption}>{leftTop[0].caption}</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={styles.imageWrapper}><div className={styles.placeholder} /></div>
                                <div className={styles.imageWrapper}><div className={styles.placeholder} /></div>
                            </>
                        )}
                    </div>

                    {leftBottom && (
                        <div className={styles.leftBottom}>
                            <div className={styles.imageWrapper}>
                                <img src={leftBottom.src} alt={leftBottom.alt} />
                                <span className={styles.caption}>{leftBottom.caption}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.rightColumn}>
                    {rightTop && (
                        <div className={styles.rightTop}>
                            <div className={styles.imageWrapper}>
                                <img src={rightTop.src} alt={rightTop.alt} />
                                <span className={styles.caption}>{rightTop.caption}</span>
                            </div>
                        </div>
                    )}

                    <div className={styles.rightBottom}>
                        <div className={styles.imageWrapper}>
                            {rightBottom?.[0] ? (
                                <>
                                    <img src={rightBottom[0].src} alt={rightBottom[0].alt} />
                                    <span className={styles.caption}>{rightBottom[0].caption}</span>
                                </>
                            ) : (
                                <div className={styles.placeholder} />
                            )}
                        </div>
                        <div className={styles.imageWrapper}>
                            {rightBottom?.[1] ? (
                                <>
                                    <img src={rightBottom[1].src} alt={rightBottom[1].alt} />
                                    <span className={styles.caption}>{rightBottom[1].caption}</span>
                                </>
                            ) : (
                                <div className={styles.placeholder} />
                            )}
                        </div>
                    </div>

                    {rightExtra && (
                        <div className={styles.rightExtra}>
                            <div className={styles.imageWrapper}>
                                <img src={rightExtra.src} alt={rightExtra.alt} />
                                <span className={styles.caption}>{rightExtra.caption}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SixPicturesMirrored;
