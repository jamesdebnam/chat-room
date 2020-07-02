import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (pageNum = 1) => {
    const response = await axios.get(`/posts/page/${pageNum}`);
    return response.data;
  }
);

export const fetchUserPosts = createAsyncThunk(
  "posts/fetchUserPosts",
  async (request) => {
    const response = await axios.post("/posts/user", request);
    return response.data;
  }
);

export const fetchSinglePost = createAsyncThunk(
  "posts/fetchSinglePost",
  async (postId) => {
    const response = await axios.get(`/posts/${postId}`);
    return response.data;
  }
);

export const addPost = createAsyncThunk("posts/addPost", async (input) => {
  const response = await axios.post("/posts/page/1", input);
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const response = await axios.delete(`post/${id}`);
  return response.data;
});

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
    [addPost.fulfilled]: (state, action) => {
      return [action.payload, ...state];
    },
    [fetchUserPosts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [fetchSinglePost.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { reset } = postsSlice.actions;
