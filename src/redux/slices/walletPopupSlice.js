import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletPopup: {
    isOpened: false,
  },
};

export const walletPopup = createSlice({
  name: "walletPopup",
  initialState,
  reducers: {
    open: (state) => {
      state.walletPopup.isOpened = true;
    },
    close: (state) => {
      state.walletPopup.isOpened = false;
    },
  },
});

export const { open, close } = walletPopup.actions;

export default walletPopup.reducer;
