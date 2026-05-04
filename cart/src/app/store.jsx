import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice';

// 1. Custom Storage Wrapper (Fixes the "getItem is not a function" error)
const localStorageBtn = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

// 2. Combine Reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

// 3. Persist Config
const persistConfig = {
  key: 'root',
  version: 1,
  storage: localStorageBtn, 
  whitelist: ['cart', 'user'], // Only these will be saved to localStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Standard RTK way to ignore all redux-persist non-serializable actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);