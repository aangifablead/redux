import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import cartReduceer from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReduceer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;