import React from 'react';
import styles from './Info.module.css';
import defaultPhoto from '../../../assets/images/noAvatar.png'

export const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.avatar}>
                <img className={styles.profilePic} alt={'userAvatar'} src={defaultPhoto}/>
            </div>
            <div className={styles.about}>
                <p>khghfgfgfdjgdjfghdg</p>
            </div>
        </div>
    );
};

