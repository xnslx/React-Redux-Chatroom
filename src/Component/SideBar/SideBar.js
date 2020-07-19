import React from 'react';
import classes from './SideBar.module.css';
import { connect} from 'react-redux';

const SideBar = (props) => {
    // console.log(props)
    const data = Object.keys(props.contacts).map(key=> props.contacts[key])
    // console.log(data)
    return (
        <aside className={classes.SideBar}>
            <ul>
                {data.map(contact => (
                    <ul key={contact.userId}>
                        <li>{contact.userName}</li>
                        <img alt="userImage"src={contact.avatar} style={{width:'100%', height:'auto'}}/>
                    </ul>
                ))}
            </ul>
        </aside>
    )
};

const mapStateToProps = state => {
    return {
        contacts:state.contacts
    }    
}

export default connect(mapStateToProps,null)(SideBar);
