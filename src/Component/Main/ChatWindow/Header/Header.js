import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    // console.log(props)
    const {userName, status} = props.user
    return (
        <header className={classes.Header}>
            <p style={{textAlign:'left', marginLeft:'20px'}}>To: <strong>{userName}</strong></p>
            <p style={{textAlign:'left', marginLeft:'20px'}} className={classes.Status}>{status}</p>
        </header>
    )
};

export default Header;
