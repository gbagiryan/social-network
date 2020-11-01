import React from 'react';
import {Post} from "./Post/Post";
import styles from './Posts.module.css'

export const Posts = (props) => {

    const writePost = (e) => {
        props.writePost(e.target.value);
    }
    const addPost = () => {
        props.addPost();
    }

    return (
        <div className={styles.posts}>
            <div>
                <textarea className={styles.newPost} onChange={writePost} value={props.newPostContent}></textarea>
                <button onClick={addPost}>Add</button>
            </div>
            {props.posts.map(postEl => <Post post={postEl.content} key={postEl.id}/>)}
        </div>
    );
};