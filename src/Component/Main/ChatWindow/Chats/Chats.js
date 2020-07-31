import React from 'react';
import classes from './Chats.module.css';

const Chats = (props) => {
    // console.log(props)
    const {activeUserMessages,is_user_msg} = props;
    console.log(activeUserMessages)
    
    return (
        <div className={classes.Container}>
            {activeUserMessages.map(obj => (
                <span key={obj.id} className={`Chats ${is_user_msg ? "is_user_msg" : ""}`}>{obj.text}</span>
            ))}
        </div>
    )
};

export default Chats;
