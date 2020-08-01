import React from 'react';
import classes from './Chats.module.css';

const Chats = (props) => {
    const {activeUserMessages} = props;
    console.log(activeUserMessages)
    
    // const [object] = activeUserMessages;
    // console.log(object)
    // const {is_user_msg} = object;
    // console.log(is_user_msg)
    

    // let isUserMsg = []
    // for(let key in activeUserMessages) {
    //     isUserMsg.push(activeUserMessages[key].is_user_msg)
    // }
    // console.log(isUserMsg)
    return (
        <div className={classes.Container}>
            {activeUserMessages.map(obj => (
                <span key={obj.id} className={`Chats ${obj.is_user_msg ? "is-user-msg" : ""}`}>{obj.text}</span>
            ))}
        </div>
    )
};

export default Chats;
