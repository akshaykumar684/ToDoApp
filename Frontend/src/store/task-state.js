import { createSlice } from "@reduxjs/toolkit";

const initialToDoState = {
  showModal: false,
  action: undefined,
  taskId: undefined,
  selectedTask: null,
  tasks: [],
};

const toDoSlice = createSlice({
  name: "toDoStates",
  initialState: initialToDoState,
  reducers: {
    initializeTasks(state, payload) {
      state.tasks = payload.payload;
    },
    addTask(state, payload) {
      state.tasks.push(payload.payload);
    },
    updateTask(state, payload) {
      const index = state.tasks.findIndex(
        (task) => task.id === payload.payload.id
      );
      state.tasks[index] = payload.payload;
      state.selectedTask = null;
      state.action = undefined;
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter(
        (task) => task.id !== payload.payload.id
      );
    },
    hideModal(state) {
      state.showModal = false;
    },
    showModal(state, payload) {
      state.showModal = true;
      state.action = payload.payload.action;
      state.selectedTask = payload.payload.selectedTask;
    },
  },
});

export default toDoSlice.reducer;

export const toDoActions = toDoSlice.actions;
