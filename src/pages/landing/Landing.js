import React from 'react'

import { Card, CardContainer, FilterTabs, Footer, NavBar, PriceFilter } from './components'
import styles from './Landing.module.scss'

const Landing = () => {
    return (
        <div className={styles.container}>
         <NavBar/>
         <FilterTabs/>
         <PriceFilter/>
         <CardContainer/>
         <Footer/>
        </div>
    );
};

export default Landing
