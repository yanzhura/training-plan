import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user';

const rootReducer = combineReducers({
    user: userReducer
});

export default configureStore({ reducer: rootReducer });
