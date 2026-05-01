import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('api/fetchData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) throw new Error('Failed to fetch from API')
    const data = await response.json()

    console.log(response,'datadata')
    return data
})quotes

const apiSlice = createSlice({
    name: 'apiData',
    initialState: { item: [], status: 'idle' },
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.item = action.payload
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default apiSlice.reducer;