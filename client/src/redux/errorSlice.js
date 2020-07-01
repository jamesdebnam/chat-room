import { createSlice } from "@reduxjs/toolkit";
import { fetchUserLogin } from "./loginSlice";
import { fetchPosts } from "./postsSlice";

export const errorSlice = createSlice({
  name: "error",
  initialState: "",
  reducers: {
    resetError: () => "",
  },
  extraReducers: {
    [fetchUserLogin.rejected]: () =>
      "Sorry, that username doesn't exist. Have you registered?",
    [fetchPosts.rejected]: () => "You've reached the end of all posts!",
  },
});

export const { resetError } = errorSlice.actions;
