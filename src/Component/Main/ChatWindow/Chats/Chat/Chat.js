import React from 'react';
// import classes from './Chat.module.css';

const Chat = (props) => {
    console.log(props);
    const {message, id, isUserMsg} = props;
    // const {messages} = props;
    // console.log(messages)

    return (
        // <div className={classes.ChatContainer}>
        //     {props.messages.map(message => (
        //         <span key={message.id} className={`Chat ${message.is_user_msg ? "is-user-msg" : ""}`}>{message.text}</span>
        //     ))}
        // </div>
        <span key={id} className={`Chat ${isUserMsg ? "is-user-msg" : ""}`}>
            {message}
        </span>
    )
};

export default Chat;
