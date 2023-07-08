import React, { useState, useEffect } from 'react'

import { CardContainer, FilterTabs, Footer, NavBar, PriceFilter } from './components'
import styles from './Landing.module.scss'
import { Modal } from 'components/common';

const Landing = () => {
    const [showModal, setShowModal] = useState(false);
    const [loadCount, setLoadCount] = useState(0);
    const [showWebsite, setShowWebsite] = useState(false);

    useEffect(() => {
        const count = Number(localStorage.getItem('loadCount') || 0) + 1;
        setLoadCount(count);
        setShowWebsite(true);

        if (count <= 5) {
            setShowModal(true);
            localStorage.setItem('loadCount', String(count));
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWebsite(false);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };
    
    return (
        <div className={styles.container}>
            <NavBar />
            <FilterTabs />
            <PriceFilter />
            <CardContainer />
            <Footer />
            <Modal title="This website is only developed for educational purpose." isOpen={showModal} onClose={closeModal}>
                Dear Website Users,
                <br /> <br />
                This Replica website is developed for Educational purpose . If you have any complaints or concerns related to this website, we kindly request you to reach out to us on LinkedIn.
                <br /> <br />
                <div className={styles['contact-card']}>
                    <p>
                        Contact Person:  <strong>Kiran Devadas</strong>
                    </p>
                    <p>
                        LinkedIn Profile: <a target='_blank' href='https://www.linkedin.com/in/kirandevadas/'><strong>LinkedIn.com/kirandevadas</strong></a>

                    </p>
                    <p>
                        Email: <a target='_blank' href="mailto:mail.kirandevadas@gmail.com?subject=Complaints regarding this website"><strong>mail.kirandevadas@gmail.com</strong></a>
                    </p>
                </div>
                <br />
                We thank you for your support and engagement with our website. Your feedback is essential in helping us improve and provide a better educational environment. We look forward to hearing from you.
                <br /> <br />
                Best regards, <br />

                <strong>
                    Kiran
                </strong>
            </Modal>
        </div>
    );
};

export default Landing
