import React from 'react';
import { connect} from 'react-redux';

const User = (props) => {
    console.log(props)
    const {userName, avatar} = props.user;
    
    return (
        <div>
            <p>{userName}</p>
            <img alt ="userImage"src={avatar} style={{width:'64px', height:'64px', borderRadius:'50%', objectFit:'cover'}}/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(User);
