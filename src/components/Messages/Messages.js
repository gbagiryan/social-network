import React from 'react';
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import styles from './Messages.module.css';

export const Messages = (props) => {

    const writeMessage = (e) => {
        props.writeMessage(e.target.value);
    };

    const sendMessage = () => {
        props.sendMessage();
    };

    return (
        <div className={styles.messages}>
            <div className={styles.dialogs}>
                {props.dialogs.map(dialogEl => <Dialog name={dialogEl.name} id={dialogEl.id} key={dialogEl.id}/>)}
            </div>
            <div className={styles.conversations}>
                {props.messages.map(messageEl => <Message message={messageEl.content} key={messageEl.id}/>)}

                <textarea className={styles.writeMessage}
                          onChange={writeMessage} value={props.newMessageContent}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};