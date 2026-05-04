import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { theme: 'light', history: [] },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    addOrderToHistory: (state, action) => {
      state.history.unshift({
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        items: action.payload.items,
        total: action.payload.total
      });
    }
  }
});
export const { addOrderToHistory } = userSlice.actions;
export default userSlice.reducer;