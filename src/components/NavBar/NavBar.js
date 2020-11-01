import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.css';

export const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div>
                <NavLink to="/profile" activeClassName={styles.active} className={styles.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" activeClassName={styles.active} className={styles.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={styles.active} className={styles.item}>Users</NavLink>
            </div>
            <div>
                <NavLink to="/friends" activeClassName={styles.active} className={styles.item}>Friends</NavLink>
            </div>

            <div className={styles.friendsPreview}>
                {'friends'}
            </div>
        </div>
    );
};