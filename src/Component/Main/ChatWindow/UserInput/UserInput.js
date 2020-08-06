import React from 'react';
import {userInput} from './../../../../action/action';
import {connect} from 'react-redux';

const UserInput = (props) => {
    console.log(props)

    const userInputChangeHandler = (e) => {
        props.dispatch(userInput(e.target.value))
    }
    return (
        <form>
            <input 
                placeholder="imessage"
                value={props.userInput.value}
                onChange={userInputChangeHandler}
            />
        </form>
    )
};

const mapStateToProps = state => {
    console.log(state)
    return {
        userInput:state.userInput
    }
}

export default connect(mapStateToProps)(UserInput);
