import xianImage from '../../assets/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg';
import YuanchaoImage from '../../assets/kal-visuals-b1Hg7QI-zcc-unsplash.jpg';
import LydiaImage from '../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
import SkylerImage from '../../assets/philipe-cavalcante-Ugpcxb0jG4Q-unsplash.jpg';
import UserImage from '../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import {combineReducers} from 'redux';
import * as actionTypes from './../action';
import {v4} from 'uuid';

const txtgen = require('txtgen');


const contacts = {
    Tony:{
        userName:'Tony',
        avatar: xianImage,
        status:txtgen.sentence(),
        userId: v4()
    },
    Jane:{
        userName:'Jane',
        avatar:YuanchaoImage,
        status:txtgen.sentence(),
        userId:v4()
    },
    Anny:{
        userName:'Anny',
        avatar:LydiaImage,
        status:txtgen.sentence(),
        userId:v4()
    },
    Emily:{
        userName:'Emily',
        avatar:SkylerImage,
        status:txtgen.sentence(),
        userId:v4()
    }
}

const contactsReducer = (state=contacts,action) => {
    switch(action.type) {
        default:
            return state
    }

}

const user = {
    userName:'Xian',
    avatar:UserImage,
    status:txtgen.sentence(),
    userId:v4()
}

const userReducer = (state=user,action) => {
    switch(action.type) {
        default:
            return state
    }

}

const activeUserIdInitial = {
    id: null
}

const activeUserIdReducer = (state=activeUserIdInitial, action) =>{
    switch(action.type) {
        case actionTypes.SET_ACTIVE_USER_ID:
            return {
                ...state,
                id: action.activeUserId
            }
        default:
            return state
    }
}

// const getMessages = (number) => {
//     let messages = {}
//     for(let i=0; i< number; i++) {
//         messages[i] = txtgen.sentence()
//     }
//     return messages
// }

const messagesInitial = {
    messages:{
        Tony:{
            0:{
                id:v4(),
                is_user_msg: false,
                text:txtgen.sentence()
            },
            1:{
                id:v4(),
                is_user_msg: true,
                text:txtgen.sentence()
            },
            2:{
                id:v4(),
                is_user_msg: false,
                text:txtgen.sentence()
            },
            3:{
                id:v4(),
                is_user_msg: true,
                text:txtgen.sentence()
            }
        },
        Jane:{
            0:{
                id:v4(),
                is_user_msg: false,
                text:txtgen.sentence()
            },
            1:{
                id:v4(),
                is_user_msg: true,
                text:txtgen.sentence()
            },
            2:{
                id:v4(),
                is_user_msg: false,
                text:txtgen.sentence()
            },
            3:{
                id:v4(),
                is_user_msg: true,
                text:txtgen.sentence()
            }
        },
        Anny:{
            0:{
                id:v4(),
                is_user_msg: false,
                text:txtgen.sentence()
            },
            1:{
                id:v4(),
                is_user_msg: true,
                text:txtgen.sentence()
            },
            2:{
                id:v4(),
                is_user_msg: false,
                text:txtgen.sentence()
            },
            3:{
                id:v4(),
                is_user_msg: true,
                text:txtgen.sentence()
            }
        },
        Emily:{
            0:{
                id:v4(),
                is_user_msg: false,
                text:txtgen.sentence()
            },
            1:{
                id:v4(),
                is_user_msg: true,
                text:txtgen.sentence()
            },
            2:{
                id:v4(),
                is_user_msg: false,
                text:txtgen.sentence()
            },
            3:{
                id:v4(),
                is_user_msg: true,
                text:txtgen.sentence()
            }
        }
    },
    activeUserMessages:{}
}

const messagesReducer = (state = messagesInitial,action) => {
    switch(action.type) {
        case actionTypes.GET_MESSAGES:
            return{
                ...state,
                activeUserMessages:state.messages[action.userName]
            }
        case actionTypes.USER_SUBMIT:
            const number =4
            return {
                ...state,
                activeUserMessages:{
                    ...state.activeUserMessages,
                    [number]: {
                        id:v4(),
                        is_user_msg:true,
                        text:action.userInput
                    }
                }
            }
        default:
            return state
    }
}

const userInputInitial = {
    value:''
}

const userInputReducer = (state=userInputInitial, action) => {
    switch(action.type) {
        case actionTypes.USER_INPUT:
            return {
                value:action.userInput
            }
        default:
                return state
    }
}

const rootReducer = combineReducers({
    contacts: contactsReducer,
    user:userReducer,
    activeUserId:activeUserIdReducer,
    messages:messagesReducer,
    userInput:userInputReducer
})

export default rootReducer;