export const SET_ACTIVE_USER_ID = ' SET_ACTIVE_USER_ID';
export const GET_MESSAGES = 'GET_MESSAGES';
export const USER_INPUT = 'USER_INPUT';

// const txtgen = require('txtgen');

export const setActiveUserId = id => {
    return {
        type: SET_ACTIVE_USER_ID,
        activeUserId: id
    }
}

// export const getMessages = (number) => {
//     let messages = {}
//     for (let i = 0; i < number; i++) {
//         messages[i] = txtgen.sentence()
//     }
//     return messages
// }

export const getMessages = userName => {
    return {
        type: GET_MESSAGES,
        userName: userName
    }
}

export const userInput = input => {
    return {
        type: USER_INPUT,
        userInput: input
    }
}