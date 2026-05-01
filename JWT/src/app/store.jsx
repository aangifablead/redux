import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice'; // The API slice we created earlier
import authReducer from '../features/auth/authSlice'; // The Auth slice we created earlier

export const store = configureStore({
  reducer: {
    // 1. Add the API slice reducer (handles caching and lifecycle)
    [apiSlice.reducerPath]: apiSlice.reducer,
    
    // 2. Add your Auth reducer (handles user/token state)
    auth: authReducer,
  },
  
  // 3. Add the API middleware
  // This is required for RTK Query to enable features like caching and invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    
  // 4. Enable Redux DevTools for development
  devTools: true, 
});