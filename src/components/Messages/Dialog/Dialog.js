import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Dialog.module.css';

export const Dialog = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/messages/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    );
};