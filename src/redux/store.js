import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    //SYNTAX ERROR
    reducers:{
        user: userReducer,
    }
});

export default store;
