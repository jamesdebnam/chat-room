import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("/posts");
  return response.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});
