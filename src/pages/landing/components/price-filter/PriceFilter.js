import React from 'react'

import styles from './PriceFilter.module.scss';
import { Switch } from 'components/common';

const PriceFilter = () => {
    return (
        <div className={`d-flex align-items-center justify-content-between ${styles.wrapper}`}>
            <div className='d-flex align-items-center'>
                <p>
                    Display total price
                </p>
                <p>
                    Includes all fees, before taxes
                </p>
            </div>
            <Switch/>
        </div>
    );
};

export default PriceFilter
