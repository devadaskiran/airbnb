import React from 'react'

import logo from 'assets/images/logo/logo.png';
import styles from './NavBar.module.scss';
import { Button, Dropdown } from 'components/common';
import { HamburgerIcon, GlobeIcon, UserIcon } from 'components/common/icons';
import DateFilter from '../date-filter/DateFilter';

const NavBar = () => {
    return (
        <header className={styles.wrapper}>
            <img src={logo} alt='app logo' className={styles.logo} />
            <div className={styles.filter}>
                <DateFilter/>
            </div>
            <div className={`d-flex align-items-center ${styles['account-info']}`}>
                <Button className={styles['home-button']} label="Airbnb your home" variant="transparent" />
                <Button label={<GlobeIcon />} variant={"transparent"} />
                <Dropdown
                    label={
                        <Button
                            className={styles['avatar-button']}
                            label={
                                <div className={`d-flex align-items-center ${styles['icon-wrapper']}`}>
                                    <HamburgerIcon />
                                    <UserIcon />
                                </div>
                            }
                            variant="outllined"
                        />
                    }
                />
            </div>
        </header>
    );
};

export default NavBar
