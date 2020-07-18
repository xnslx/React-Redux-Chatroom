import React from 'react';
import classes from './SideBar.module.css';
import { connect} from 'react-redux';

const SideBar = (props) => {
    console.log(props)
    return (
        <aside className={classes.SideBar}>
            <p>Sidebar</p>
        </aside>
    )
};

const mapStateToProps = state => {
    // console.log(state)
    const {contacts} = state;
    console.log(contacts)
    for (let key in contacts) {
        return contacts[key]
    }
    
}

export default connect(mapStateToProps,null)(SideBar);
