import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialToDoState = {
  tasks: [
    { id: 1, name: "Do Assignment", remarks: "Complete by 12 Dec" },
    { id: 2, name: "Do Assignment", remarks: "Complete by 12 Dec" },
  ],
};

const toDoSlice = createSlice({
  name: "toDoStates",
  initialState: initialToDoState,
  reducers: {
    addTask(state, payload) {
      state.tasks.add(payload.payload);
    },
    updateTask(state, payload) {
      const index = state.tasks.findIndex(
        (task) => task.id === payload.payload.id
      );
      state.tasks[index] = payload.payload;
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter(
        (task) => task.id !== payload.payload.id
      );
    },
  },
});

const store = configureStore({
  reducer: { toDoStates: toDoSlice.reducer },
});

export default store;

export const toDoActions = toDoSlice.actions;
