import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const slice1 = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.login = !state.login;
    },
    signout: (state) => {
      state.login = !state.login;
    },
  },
});

export const { login, signout } = slice1.actions;

export default slice1.reducer;
