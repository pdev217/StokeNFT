import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: 1,
};

export const carousel = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = carousel.actions;

export default carousel.reducer;
