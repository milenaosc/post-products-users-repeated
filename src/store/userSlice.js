import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    currentUser: {},
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    getSingleUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { getAllUsers, getSingleUser } = userSlice.actions;
export default userSlice.reducer;
