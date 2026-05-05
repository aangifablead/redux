import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  registeredUsers: User[]; // Mocking a database
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('activeUser') || 'null'),
  isLoggedIn: !!localStorage.getItem('activeUser'),
  registeredUsers: JSON.parse(localStorage.getItem('users') || '[]'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<User & { password: any }>) => {
      state.registeredUsers.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state.registeredUsers));
    },
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('activeUser', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('activeUser');
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;