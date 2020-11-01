import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.element}>
                home
            </div>
            <div className={styles.element}>
                info
            </div>
            <div className={styles.element}>
                contact
            </div>
        </div>
    )
};

export default Header;