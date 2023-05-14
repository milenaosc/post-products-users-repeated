import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    allPosts: [],
  },
  reducers: {
    getAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
  },
});

export const { getAllPosts } = postSlice.actions;
export default postSlice.reducer;
