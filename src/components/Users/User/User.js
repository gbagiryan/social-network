import React from 'react';
import styles from './User.module.css';
import {NavLink} from "react-router-dom";
import defaultPhoto from '../../../assets/images/noAvatar.png'

export const User = (props) => {
    return (
        <div className={styles.user}>

            <NavLink to={`/profile/${props.user.id}`}>
                <img className={styles.avatar} alt={'avatar'}
                     src={props.user.photos.small != null ? props.user.photos.small : defaultPhoto}/>
            </NavLink>
            <NavLink to={`/profile/${props.user.id}`}>
                {props.user.name}
            </NavLink>

            <button onClick={() => props.setFollow(props.user.id)}>{props.user.followed ? 'unfollow' : 'follow'}</button>
        </div>
    );
};