'use client';

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
            <section
                className={styles.wrapper}
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
                <div className={styles.overlay} />

                {/* 👇 Container to limit max-width */}
                <div className={styles.container}>
                    <div className={styles.stackContainer}>
                        <div className={styles.rightImageWrapper}>
                            <img src={rightImageUrl} alt="Right visual" />
                        </div>

                        <div className={styles.textContent}>
                            <h2>
                                {highlightedTitle && (
                                    <span className={styles.highlight}>{highlightedTitle}</span>
                                )}{" "}
                                {title}
                            </h2>
                            <p>{description}</p>
                        </div>

                        <div className={styles.leftImageWrapper}>
                            <img src={leftImageUrl} alt="Left visual" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BackgroundPictureAndTwoPicturesWithText;
