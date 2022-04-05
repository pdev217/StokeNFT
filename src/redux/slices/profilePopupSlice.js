import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePopup: {
    isOpened: false,
  },
};

export const profilePopup = createSlice({
  name: "profilePopup",
  initialState,
  reducers: {
    open: (state) => {
      state.profilePopup.isOpened = true;
    },
    close: (state) => {
      state.profilePopup.isOpened = false;
    },
  },
});

export const { open, close } = profilePopup.actions;

export default profilePopup.reducer;
