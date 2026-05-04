import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from '../features/paymentSlice';

// You can add other reducers here as your app grows (e.g., cart, user)
export const store = configureStore({
  reducer: {
    payment: paymentReducer,
  },

//   devTools: process.env.NODE_ENV !== 'production', 
});