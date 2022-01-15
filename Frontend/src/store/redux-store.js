import { configureStore } from "@reduxjs/toolkit";
import toDoSliceReducer from "./task-state";
import toastSliceReducer from "./toast-state";

const store = configureStore({
  reducer: { toDoStates: toDoSliceReducer, toastStates: toastSliceReducer },
});

export default store;
