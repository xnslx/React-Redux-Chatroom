import React from 'react'
import classes from './Main.module.css';
import User from './User/User';
import ChatWindow from './ChatWindow/ChatWindow';
import {connect} from 'react-redux';

const Main = (props) => {
    let panel = null;
    if(!props.activeUserId) {
        panel = <User />
    } else {
        panel = <ChatWindow />
    }
    return (
        <div className={classes.Main}>
            {panel}
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state)
    return {
        activeUserId: state.activeUserId
    }
}

export default connect(mapStateToProps)(Main);
