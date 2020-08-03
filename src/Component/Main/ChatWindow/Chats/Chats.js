import React from 'react';
// import classes from './Chats.module.css';
import Chat from './Chat/Chat';

const Chats = (props) => {
    const {activeUserMessages} = props;
    console.log(activeUserMessages)
    
    return (
        <>
            <Chat messages={activeUserMessages}/>
        </>
    )
};

export default Chats;
