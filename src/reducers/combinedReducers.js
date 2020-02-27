import { combineReducers } from 'redux';
import userReducer from './userReducer';
import todoReducer from './todoReducer';
import loadingReducer from './loadingReducer';
import paginationReducer from './paginationReducer';

export default combineReducers({
  userReducer,
  todoReducer,
  loadingReducer,
  paginationReducer
})