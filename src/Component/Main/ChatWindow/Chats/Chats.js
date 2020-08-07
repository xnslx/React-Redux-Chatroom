import React from 'react';
import classes from './Chats.module.css';
import Chat from './Chat/Chat';

const Chats = (props) => {
    console.log('props', props)
    const {activeUserMessages} = props;
    console.log('activeUserMessages',activeUserMessages)
    
    const updatedActiveUserMessages = Object.keys(activeUserMessages).map(key=>activeUserMessages[key])
    
    return (
        <div className={classes.Chats}>
            {updatedActiveUserMessages.map(message => (
                <Chat message={message.text} key={message.id} isUserMsg={message.is_user_msg}/>
            ))}
        </div>
    )
};

export default Chats;
