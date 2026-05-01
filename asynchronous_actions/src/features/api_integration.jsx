import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('quotes/fetchAll', async () => {
    const response = await fetch('https://dummyjson.com/quotes?limit=10')
    return response.json()
})
const userSlice = createSlice({
    name: 'quotes',
    initialState: { data: [], loading: false, error: null },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                // Access action.payload.quotes to get the actual array
                state.data = action.payload.quotes;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})
export default userSlice.reducer;