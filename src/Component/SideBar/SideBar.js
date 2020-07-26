import React from 'react';
import classes from './SideBar.module.css';
import {setActiveUserId} from './../../action/action';
import { connect} from 'react-redux';

const SideBar = (props) => {
    // console.log(props)
    const data = Object.keys(props.contacts).map(key=> props.contacts[key])
    // console.log(data)
    const clickHandler = (id) => {
        // console.log(id)
        props.dispatch(setActiveUserId(id))
    }
    return (
        <aside className={classes.SideBar}>
            <>
                {data.map(contact => (
                    <ul key={contact.userId} className={classes.List} onClick={() => clickHandler(contact.userId)}>
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
        contacts:state.contacts
    }    
}

export default connect(mapStateToProps,null)(SideBar);
