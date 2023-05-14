import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    postStore: postSlice,
  },
});

export default store;
