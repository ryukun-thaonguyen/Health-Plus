/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import app from './AppRedux/Reducer';
import login from './LoginRedux/Reducer';
import googlefit from './GoogleFitRedux/reducer';
import profile from './Profile/reducer';
const rootReducer = combineReducers({
    app,
    login,
    googlefit,
    profile,
  });
export default rootReducer;
