import React from 'react'

const Chats = (props) => {
    // console.log(props)
    const {activeUserMessages} = props;
    console.log(activeUserMessages)
    
    return (
        <div>
            {activeUserMessages.map(obj => (
                <span key={obj.id}>{obj.text}</span>
            ))}
        </div>
    )
};

export default Chats;
