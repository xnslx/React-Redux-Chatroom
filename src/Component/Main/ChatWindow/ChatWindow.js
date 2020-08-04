import React from 'react';
import classes from './ChatWindow.module.css';
import Header from './Header/Header';
import Chats from './Chats/Chats';
import {connect} from 'react-redux';


const ChatWindow = (props) => {
    console.log(props)
    const activeUserList = Object.keys(props.contacts).map(key=> props.contacts[key])
    const values = activeUserList.values()
    let activeUser;
    for(const value of values) {
        if(value.userId === props.activeUserId.id) {
            // console.log(value)
            activeUser = value
        }
    }
    console.log('activeUser', activeUser)
    const activeUserMessages = Object.keys(props.activeUserMessages).map(key=>props.activeUserMessages[key])
    console.log('activeUserMessages',activeUserMessages)

    return (
        <div className={classes.Container}>
            <Header user={activeUser}/>
            <Chats activeUserMessages={activeUserMessages} activeUser={activeUser}/>
        </div>
    )
};


const mapStateToProps = state => {
    console.log(state)
    return {
        activeUserId: state.activeUserId,
        contacts:state.contacts,
        messages:state.messages.messages,
        activeUserMessages:state.messages.activeUserMessages
    }
}


export default connect(mapStateToProps)(ChatWindow);
