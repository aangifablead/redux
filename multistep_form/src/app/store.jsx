import { configureStore } from '@reduxjs/toolkit';
import multiStepReducer from '../features/multiStepSlice';

export const store = configureStore({
  reducer: {
    multiStep: multiStepReducer, 
  },
});