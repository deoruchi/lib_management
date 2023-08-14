import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  modelData: null,
};

export const modalslice = createSlice({
  name: "model",
  initialState,
  reducers: {
    close: (state) => {
      state.show = !state.show;
      state.modelData = null;
    },
    show: (state, action) => {
      state.show = !state.show;
      state.modelData = action.payload;
    },
  },
});

export const { close, show } = modalslice.actions;

export default modalslice.reducer;
