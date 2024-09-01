import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const globalStore = configureStore({
  userSlice,
});
export default globalStore;
