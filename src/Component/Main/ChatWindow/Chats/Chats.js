import React from 'react';
import classes from './Chats.module.css';
import Chat from './Chat/Chat';

const Chats = (props) => {
    // const [object] = props.activeUserMessages;
    // console.log(object)
    // const {is_user_msg} = object;
    // console.log(is_user_msg)
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
            <Chat messages={activeUserMessages}/>
        </div>
    )
};

export default Chats;
