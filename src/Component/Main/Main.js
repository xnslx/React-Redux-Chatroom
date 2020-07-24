import React from 'react'
import classes from './Main.module.css';
import User from './User/User';

const Main = () => {
    return (
        <div className={classes.Main}>
            <User />
        </div>
    )
};

export default Main;
