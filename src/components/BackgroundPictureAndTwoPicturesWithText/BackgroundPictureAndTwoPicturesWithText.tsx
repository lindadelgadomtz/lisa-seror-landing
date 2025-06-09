import React from "react";
import styles from "./BackgroundPictureAndTwoPicturesWithText.module.scss";

interface Props {
    backgroundImageUrl: string;
    leftImageUrl: string;
    rightImageUrl: string;
    title: string;
    highlightedTitle?: string;
    description?: string;
}


const BackgroundPictureAndTwoPicturesWithText: React.FC<Props> = ({
    backgroundImageUrl,
    leftImageUrl,
    rightImageUrl,
    title,
    description,
    highlightedTitle,

}) => {
    return (
        <div className={styles.relativeWrapper}>
            {/* Section with background and text */}
            <section
                className={styles.wrapper}
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
                <div className={styles.overlay} />
                <div className={styles.content}>
                    <div className={styles.textContent} data-aos="fade-left" data-aos-delay="600">
                        <h2>
                            {highlightedTitle && <span className={styles.highlight}>{highlightedTitle}</span>} {title}
                        </h2>                        <p>{description}</p>
                    </div>
                </div>
            </section>

            {/* Absolutely positioned images overlapping above section */}
            <div className={styles.leftImageWrapper} data-aos="fade-up" data-aos-delay="200">
                <img
                    src={leftImageUrl}
                    alt="Left visual"
                    width={300}
                    height={400}
                    loading="lazy"
                />
            </div>

            <div className={styles.rightImageWrapper} data-aos="fade-up" data-aos-delay="400">
                <img
                    src={rightImageUrl}
                    alt="Right visual"
                    width={300}
                    height={400}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default BackgroundPictureAndTwoPicturesWithText;
