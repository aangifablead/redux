import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    items: [
      { id: "1", content: "Task 1" },
      { id: "2", content: "Task 2" },
      { id: "3", content: "Task 3" },
      { id: "4", content: "Task 4" },
    ],
  },
  reducers: {
    reorderList: (state, action) => {
      const { fromIndex, toIndex } = action.payload;
      const [movedItem] = state.items.splice(fromIndex, 1);
      state.items.splice(toIndex, 0, movedItem);
    },
  },
});

export const { reorderList } = listSlice.actions;
export default listSlice.reducer;