import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const { showNotification } = uiSlice.actions;

export default uiSlice.reducer;
