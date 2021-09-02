

import {combineReducers} from 'redux';
import StudentReducer from './reducers/StudentReducer';

import AuthReducer from './reducers/AuthReducer';

const RootReducer =   combineReducers({

    StudentReducer  ,
    AuthReducer
})

export default RootReducer;