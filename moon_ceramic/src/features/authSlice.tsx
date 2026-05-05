import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  // password:string
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
    signUp: (state, action: PayloadAction<User>) => {
      const exists = state.registeredUsers.find(u => u.email === action.payload.email);
      if (!exists) {
        state.registeredUsers.push(action.payload);
        // Sync to localStorage
        localStorage.setItem('users', JSON.stringify(state.registeredUsers));
      }
    },
    login: (state, action) => {
      const { email } = action.payload;
      const existingUser = state.registeredUsers.find(u => u.email === email);
      
      if (existingUser) {
        state.isLoggedIn = true;
        state.user = existingUser;
        localStorage.setItem('activeUser', JSON.stringify(existingUser));
      } else {
        // Instead of throwing, we let the component handle the missing user
        // or you could set a state.error message here.
        console.warn("User not found");
      }
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