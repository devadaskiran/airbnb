import React, { useState } from 'react';

import { BeachIcon, CaveIcon, FarmhouseIcon, FilterIcon, LandscapeIcon, RoomIcon, SwimmingPoolIcon, WindmillIcon } from 'components/common/icons';
import styles from './FilterTabs.module.scss'
import { Button } from 'components/common';

const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 1, icon: <RoomIcon />, label: 'Rooms', content: '' },
    { id: 2, icon: <FarmhouseIcon/>, label: 'Farms', content: '' },
    { id: 3, icon: <LandscapeIcon />, label: 'Amazing Views', content: '' },
    { id: 4, icon: <WindmillIcon />, label: 'Windmills', content: '' },
    { id: 5, icon: <SwimmingPoolIcon />, label: 'Amazing Pools', content: '' },
    { id: 6, icon: <BeachIcon />, label: 'Beachfront', content: '' },
    { id: 7, icon: <RoomIcon />, label: 'Rooms', content: '' },
    { id: 8, icon: <FarmhouseIcon/>, label: 'Farms', content: '' },
    { id: 9, icon: <LandscapeIcon />, label: 'Amazing Views', content: '' },
    { id: 10, icon: <WindmillIcon />, label: 'Windmills', content: '' },
    { id: 11, icon: <SwimmingPoolIcon />, label: 'Amazing Pools', content: '' },
    { id: 12, icon: <BeachIcon />, label: 'Beachfront', content: '' },
  ];

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`d-flex justify-content-between align-items-center ${styles['tab-wrapper']}`}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(index)}
            className={`d-flex align-items-center flex-column ${styles['tab-button']} ${index === activeTab ? styles.active : ''}`}
          >
            {tab.icon}
            
            <span>
              {tab.label}
            </span>
          </button>
        ))}
        <Button
          className={styles['filter-button']}
          label={
            <>
              <FilterIcon/>
              Filters
            </>
          }
          variant="outllined"
        />
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default FilterTabs;
