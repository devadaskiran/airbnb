import React, {useState, useEffect, useRef} from 'react'

import lottie from 'lottie-web';

import { HeartIcon } from 'components/common/icons';
import heartAnimation from 'assets/lotties/heart.json';
import styles from './Card.module.scss';
import { Book } from 'components/common';

const Card = ({ image, avatar }) => {
    const [filled, setFilled] = useState(true);
    const [showAnimation, setShowAnimation] = useState(false);
    const animationContainer = useRef(null);
    const handleLike = () => {
        setFilled(!filled);
        setShowAnimation(true);
        setTimeout(() => {
            setShowAnimation(false);
        }, 5000);
    };
    useEffect(() => {
        if (showAnimation) {
          const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: heartAnimation,
          });
    
          return () => {
            anim.destroy();
          };
        }
      }, [showAnimation]);
    return (
        <div className={styles.wrapper} style={{ backgroundImage: 'url(' + image + ')' }}>
            <div onClick={handleLike} className={`${styles.like} ${!filled && styles.active}`}>
                <HeartIcon outlined={filled} />
                {showAnimation && <div className={styles.animation} ref={animationContainer}></div>}
            </div>
            <Book className={styles.book} avatar={avatar}/>
        </div>
    );
};

export default Card
