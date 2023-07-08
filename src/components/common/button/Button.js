import React from 'react'

import styles from './Button.module.scss';

const Button = ({label, variant, className}) => {
    return (
        <button className={`${styles.wrapper} ${className} ${variant == "transparent" ? styles.transparent : variant == "outllined" ? styles.outllined : styles.primary}`}>
            <div className={styles.label}>
                {label}
            </div>
        </button>
    );
};

export default Button
