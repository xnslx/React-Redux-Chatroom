import React from 'react';
import {userInput, handleUserSubmit} from './../../../../action/action';
import {connect} from 'react-redux';

const UserInput = (props) => {
    console.log(props)

    const userInputChangeHandler = (e) => {
        props.dispatch(userInput(e.target.value))
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.dispatch(handleUserSubmit(props.userInput.value, props.activeUserId))
        props.userInput.value =''
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="imessage"
                value={props.userInput.value}
                onChange={userInputChangeHandler}
            />
        </form>
    )
};

const mapStateToProps = state => {
    // console.log(state)
    return {
        activeUserId: state.activeUserId,
        contacts:state.contacts,
        messages:state.messages.messages,
        activeUserMessages:state.messages.activeUserMessages,
        userInput:state.userInput
    }
}

export default connect(mapStateToProps)(UserInput);
