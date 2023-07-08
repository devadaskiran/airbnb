import React from 'react'

import styles from './DateFilter.module.scss';
import { SearchIcon } from 'components/common/icons';


const DateFilter = () => {
    return (
        <div className={`d-flex align-items-center ${styles.wrapper}`}>
            <div className={styles['filter-item']}>
                <p>
                    Anywhere
                </p>
            </div>
            <div className={styles['filter-item']}>
                <p>
                    Any week
                </p>
            </div>
            <div className={`d-flex align-items-center ${styles['filter-item']}`}>
                <p>
                    Add guests
                </p>
                <div className={`d-flex align-items-center justify-content-center ${styles['icon-wrapper']}`}>
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
};

export default DateFilter
