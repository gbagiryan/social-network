import React from 'react';
import {User} from "./User/User";
import styles from './Users.module.css';

export const Users = (props) => {
    // let pageCount = Math.ceil(props.totalUsersCount / props.usersPerPage);
    let pagesArr = [];

    for (let i = props.currentPage; i <= props.currentPage+10; i++) {
        pagesArr.push(i);
    }

    return (
        <div className={styles.users}>
            <div>
                {pagesArr.map(pageNum =>
                    <span
                        className={props.currentPage === pageNum ? [styles.activePage, styles.pageNum].join(' ') : styles.pageNum}
                        onClick={() => props.changePage(pageNum)}>
                        {pageNum}
                    </span>
                )}
            </div>
            <div>
                {props.users.map(userEl => <User user={userEl} key={userEl.id} setFollow={props.setFollow}/>)}
            </div>
        </div>
    );
};