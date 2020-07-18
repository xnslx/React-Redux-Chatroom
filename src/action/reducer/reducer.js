import xianImage from '../../assets/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg';
import YuanchaoImage from '../../assets/kal-visuals-b1Hg7QI-zcc-unsplash.jpg';
import LydiaImage from '../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
import SkylerImage from '../../assets/philipe-cavalcante-Ugpcxb0jG4Q-unsplash.jpg';
import {combineReducers} from 'redux';
import {v4} from 'uuid';

const contacts = {
    Xian:{
        userName:'Xian',
        avatar: xianImage,
        userId: v4()
    },
    Yuanchao:{
        userName:'Yuanchao',
        avatar:YuanchaoImage,
        userId:v4()
    },
    Lydia:{
        userName:'Lydia',
        avatar:LydiaImage,
        userId:v4()
    },
    Skyler:{
        userName:'Skyler',
        avatar:SkylerImage,
        userId:v4()
    }
}

const contactsReducer = (state=contacts,action) => {
    switch(action.type) {
        default:
            return state
    }

}

const rootReducer = combineReducers({
    contacts: contactsReducer
})

export default rootReducer;