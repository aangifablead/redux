import { createSlice } from '@reduxjs/toolkit';

const form = createSlice({
    name: 'form',
    initialState: {
        items: [{ id: Date.now(), text: '' }]
    },
    reducers: {
        addItem: (state) => {
            state.items.push({ id: Date.now(), text: '' })
        },
        updateItem: (state, action) => {
            const { id, text } = action.payload
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem) {
                existingItem.text = text
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload)
        }
    }
})

export const { addItem, removeItem, updateItem } = form.actions;
export default form.reducer;