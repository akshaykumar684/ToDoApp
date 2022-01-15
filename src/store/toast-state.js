import { createSlice } from "@reduxjs/toolkit";

const initialToastState = {
  isOperationSucessfull: true,
  msg: "",
  showToast: false,
};

const toastUISlice = createSlice({
  name: "toastData",
  initialState: initialToastState,
  reducers: {
    showToast(state, action) {
      state.showToast = true;
      state.isOperationSucessfull = action.payload.isOperationSucessfull;
      state.msg = action.payload.msg;
    },
    hideToast(state) {
      state.showToast = false;
    },
  },
});

export const toastAction = toastUISlice.actions;
export default toastUISlice.reducer;
