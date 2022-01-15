import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialToDoState = {
  counter: 0,
  candidates: [
    { id: 1, name: "Do Assignment", remarks: "Complete by 12 Dec" },
    { id: 2, name: "Do Assignment", remarks: "Complete by 12 Dec" },
  ],
};

const toDoSlice = createSlice({
  name: "toDoStates",
  initialState: initialToDoState,
  reducers: {
    increment(state) {
      state.counter = state.counter + 1;
    },
  },
});

const store = configureStore({
  reducer: { toDoStates: toDoSlice.reducer },
});

export default store;

export const toDoActions = toDoSlice.actions;
