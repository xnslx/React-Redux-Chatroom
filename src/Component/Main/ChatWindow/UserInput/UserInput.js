import React, {useRef} from 'react';
import {userInput, handleUserSubmit} from './../../../../action/action';
import classes from './UserInput.module.css';
import {connect} from 'react-redux';

const UserInput = (props) => {
    console.log(props)

    const textInput = useRef('')

    const userInputChangeHandler = () => {
        props.dispatch(userInput(textInput.current.value))
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.dispatch(handleUserSubmit(textInput.current.value, props.activeUserId))
        textInput.current.value =''
    }
    return (
        <form onSubmit={handleSubmit} className={classes.Form}>
            <input 
                placeholder="imessage"
                // value={props.userInput.value}
                ref={textInput}
                onBlur={userInputChangeHandler}
                className={classes.Input}
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
