import React, { useState, useEffect, useRef } from 'react';

import styles from './Dropdown.module.scss';

const Dropdown = ({label}) => {
    const [dropdown, setDropdown] = useState(false);
    const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
    const handleDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <div className={styles.wrapper} ref={componentRef}>
            <div onClick={handleDropdown}>
                {label}
            </div>
            {dropdown &&
                <div className={styles['dropdown-window']} onClick={handleDropdown}>
                    <ul>
                        <li>
                            <strong>
                                Sign up
                            </strong>
                        </li>
                        <li>
                            Login
                        </li>
                    </ul>
                    <ul className={styles['border-top']}>
                        <li>
                            Airbnb your home
                        </li>
                        <li>
                            Help
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Dropdown
