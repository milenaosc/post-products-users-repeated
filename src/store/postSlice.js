import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    allPosts: [],
    currentPost: {},
  },
  reducers: {
    getAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
    getSinglePost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
});

export const { getAllPosts, getSinglePost } = postSlice.actions;
export default postSlice.reducer;
