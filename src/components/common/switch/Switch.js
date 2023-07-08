import React from 'react';

import styles from './Switch.module.scss';

const Switch = () => {
  return (
    <label className={styles.switch}>
        <input type="checkbox"/>
        <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default Switch;
