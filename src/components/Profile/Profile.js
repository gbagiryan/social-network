import React from 'react';
import styles from './Profile.module.css'
import InfoContainer from "./Info/InfoContainer";
import PostsContainer from "./Posts/PostsContainer";

export const Profile = () => {
    return (
        <div>
            <div className={styles.profile}>
                <InfoContainer/>
                <PostsContainer/>
            </div>
        </div>
    );
};