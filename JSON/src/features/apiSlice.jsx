import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('api/fetchData', async () => {
    const response = await fetch('/data.json');
    const data = await response.json();
    console.log(response,'response',data)
    return data;
});

const apiSlice = createSlice({
    name: 'apiData',
    initialState: { items: [], status: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading'; 
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                console.log(state,'state',action)
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed'; 
            });
    }
})
export default apiSlice.reducer;

