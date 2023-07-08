import React from 'react'

import styles from './Book.module.scss';

const Book = ({className, avatar}) => {
    return (
        <div className={`d-flex align-items-center ${styles.wrapper} ${className}`}>
            <div className={styles.border}>
            </div>
            <div className={`d-flex align-items-center justify-content-center ${styles.inner}`}>
                <div className={styles.round} style={{backgroundImage: 'url(' + avatar +')'}}>
                </div>
            </div>
        </div>
    );
};

export default Book
