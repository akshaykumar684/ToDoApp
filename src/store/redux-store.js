import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialToDoState = {
  showModal: false,
  action: undefined,
  taskId: undefined,
  selectedTask: null,
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
      state.tasks.unshift(payload.payload);
    },
    updateTask(state, payload) {
      const index = state.tasks.findIndex(
        (task) => task.id === payload.payload.id
      );
      state.tasks[index] = payload.payload;
      state.selectedTask = null;
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
      console.log(payload);
      state.showModal = true;
      state.action = payload.payload.action;
      state.selectedTask = payload.payload.selectedTask;
    },
  },
});

const store = configureStore({
  reducer: { toDoStates: toDoSlice.reducer },
});

export default store;

export const toDoActions = toDoSlice.actions;
