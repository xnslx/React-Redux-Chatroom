import React from 'react';
import { connect} from 'react-redux';
import classes from './User.module.css';

const User = (props) => {
    console.log(props)
    const {userName, avatar, status} = props.user;
    
    return (
        <div className={classes.User}>
            <h2>Welcome,{userName}</h2>
            <img alt ="userImage"src={avatar} style={{width:'72px', height:'72px', borderRadius:'50%', objectFit:'cover'}} className={classes.Image}/>
            <p style={{width:'30vw', marginLeft:'auto', marginRight:'auto'}}><strong>Status</strong>:{status}</p>
            <button className={classes.Button}>Start a conversation</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(User);
