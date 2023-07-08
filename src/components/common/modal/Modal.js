import React from 'react'

import styles from './Modal.module.scss';
import { CloseIcon } from '../icons';

const Modal = ({ title, isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
      }
    
    return (
        <div className={`d-flex align-items-center justify-content-center ${styles.wrapper}`}>
            <div className={styles.modal}>
                <div className={`d-flex align-items-center justify-content-between ${styles.header}`}>
                    <h2>
                        {title}
                    </h2>
                    <button className={styles.close} onClick={onClose}>
                        <CloseIcon/>
                    </button>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
            <div className={styles.backdrop} onClick={onClose}></div>
        </div>
    );
};

export default Modal
