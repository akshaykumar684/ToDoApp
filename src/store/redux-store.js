import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialToDoState = {
  counter: 0,
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
