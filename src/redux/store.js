import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    //SYNTAX ERROR
    reducer:{
        user: userReducer,
    }
});

export default store;
