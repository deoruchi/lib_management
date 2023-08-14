import { configureStore } from "@reduxjs/toolkit";
import slice1 from "../StateManagement/slice1";
import modalslice from "./modalslice";
import modalslice2 from "./modalslice2";
export const store = configureStore({
  reducer: {
    loginStatus: slice1,
    modal: modalslice,
    modal2: modalslice2,
  },
});
