import React from 'react';
import classes from './SideBar.module.css';
import {setActiveUserId} from './../../action/action';
import {getMessages} from './../../action/action';
import { connect} from 'react-redux';

const SideBar = (props) => {
    console.log(props)
    const data = Object.keys(props.contacts).map(key=> props.contacts[key])
    // console.log(data)

    const clickHandler = (id,contact) => {
        // console.log(id)
        props.dispatch(setActiveUserId(id));
        props.dispatch(getMessages(contact.userName))
    }
    return (
        <aside className={classes.SideBar}>
            <>
                {data.map(contact => (
                    <ul key={contact.userId} className={classes.List} onClick={() => clickHandler(contact.userId,contact)}>
                        <img alt="userImage"src={contact.avatar} style={{width:'64px', height:'64px', borderRadius:'50%', objectFit:'cover'}}/>
                        <li className={classes.ListItem}><strong>{contact.userName}</strong></li>
                    </ul>
                ))}
            </>
        </aside>
    )
};

const mapStateToProps = state => {
    return {
        contacts:state.contacts,
        messages:state.messages.messages
    }    
}

export default connect(mapStateToProps,null)(SideBar);
