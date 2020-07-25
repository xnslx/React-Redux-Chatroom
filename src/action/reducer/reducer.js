import xianImage from '../../assets/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg';
import YuanchaoImage from '../../assets/kal-visuals-b1Hg7QI-zcc-unsplash.jpg';
import LydiaImage from '../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
import SkylerImage from '../../assets/philipe-cavalcante-Ugpcxb0jG4Q-unsplash.jpg';
import UserImage from '../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import {combineReducers} from 'redux';
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

const rootReducer = combineReducers({
    contacts: contactsReducer,
    user:userReducer
})

export default rootReducer;