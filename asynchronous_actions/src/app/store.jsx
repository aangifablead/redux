import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../features/api_integration';

export const store=configureStore({
    reducer:{
        quotes:apiReducer
    }
})