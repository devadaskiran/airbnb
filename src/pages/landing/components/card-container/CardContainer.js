import React, { useState } from 'react';

import Card from '../card/Card';
import imageData from 'assets/data/imageData';
import styles from './CardContainer.module.scss'

const CardContainer = () => {
  
  return (
    <div className={`d-flex ${styles.row}`}>
       {imageData.map((item) => (
        <div key={item.id} className={styles.grid}>
            <Card image={item.imageUrl} avatar={item.user}/>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
