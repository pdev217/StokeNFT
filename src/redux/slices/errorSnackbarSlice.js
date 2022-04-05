import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  isOpened: false,
};

export const errorSnackbar = createSlice({
  name: "errorSnackbar",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpened = true;
      state.text = action.payload;
    },
    close: (state) => {
      state.isOpened = false;
      state.text = "";
    },
  },
});

export const { open, close } = errorSnackbar.actions;

export default errorSnackbar.reducer;
