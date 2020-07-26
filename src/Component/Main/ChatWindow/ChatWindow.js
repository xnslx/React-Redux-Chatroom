import React from 'react';
import classes from './ChatWindow.module.css';
import Header from './Header/Header';
import {connect} from 'react-redux';

const ChatWindow = (props) => {

    const activeUserList = Object.keys(props.contacts).map(key=> props.contacts[key])
    const values = activeUserList.values()
    let activeUser;
    for(const value of values) {
        if(value.userId === props.activeUserId.id) {
            // console.log(value)
            activeUser = value
        }
    }
    console.log(activeUser)
    return (
        <div className={classes.Container}>
            <Header user={activeUser}/>
        </div>
    )
};


const mapStateToProps = state => {
    console.log(state)
    return {
        activeUserId: state.activeUserId,
        contacts:state.contacts
    }
}

export default connect(mapStateToProps)(ChatWindow);
