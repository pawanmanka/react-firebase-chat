import { combineReducers } from 'redux';

//Reducers
import { userReducer } from './userReducer';
import { productReducer } from './productReducer';
import { chatsReducer } from './chatsReducer';

export const rootReducer = combineReducers({ 
    user:userReducer,
    products:productReducer,
    chats:chatsReducer
})