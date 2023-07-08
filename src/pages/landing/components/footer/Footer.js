import React from 'react'

import { GlobeIcon } from 'components/common/icons';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={`d-flex justify-content-between ${styles.wrapper}`}>
            <ul className='d-flex'>
                <li>
                    © 2023 Airbnb, Inc.
                </li>
                <li>
                    Privacy
                </li>
                <li>
                    Terms
                </li>
                <li>
                    Sitemap
                </li>
                <li>
                    Company Details
                </li>
                <li>
                    Destinations
                </li>
            </ul>
            <ul className='d-flex align-items-center'>
                <li className={`d-flex ${styles.language}`}>
                    <GlobeIcon/>
                    English (IN)
                </li>
                <li>
                    INR
                </li>
                <li>
                    Support & resources
                </li>
            </ul>
        </div>
    );
};

export default Footer
