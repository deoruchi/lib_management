import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  modelData: null,
};

export const modalslice2 = createSlice({
  name: "model2",
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

export const { close, show } = modalslice2.actions;

export default modalslice2.reducer;
