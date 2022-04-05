import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myWalletOptionsPopup: {
    isOpened: false,
  },
};

export const myWalletOptionsPopup = createSlice({
  name: "myWalletOptionsPopup",
  initialState,
  reducers: {
    open: (state) => {
      state.myWalletOptionsPopup.isOpened = true;
    },
    close: (state) => {
      state.myWalletOptionsPopup.isOpened = false;
    },
  },
});

export const { open, close } = myWalletOptionsPopup.actions;

export default myWalletOptionsPopup.reducer;
