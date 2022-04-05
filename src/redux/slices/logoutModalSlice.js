import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

export const logoutModal = createSlice({
  name: "logoutModal",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpened = true;
    },
    close: (state) => {
      state.isOpened = false;
    },
  },
});

export const { open, close } = logoutModal.actions;

export default logoutModal.reducer;
