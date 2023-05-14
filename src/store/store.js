import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    postStore: postSlice,
    userStore: userSlice,
  },
});

export default store;
