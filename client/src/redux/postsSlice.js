import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (pageNum = 1) => {
    const response = await axios.get(`/posts/page/${pageNum}`);
    return response.data;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    reset: () => [],
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { reset } = postsSlice.actions;
