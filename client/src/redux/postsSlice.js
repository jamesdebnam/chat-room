import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (pageNum = 1) => {
    const response = await axios.get(`/api/posts/page/${pageNum}`);
    return response.data;
  }
);

export const fetchUserPosts = createAsyncThunk(
  "posts/fetchUserPosts",
  async (request) => {
    const response = await axios.post("/api/posts/user", request);
    return response.data;
  }
);

export const fetchSinglePost = createAsyncThunk(
  "posts/fetchSinglePost",
  async (postId) => {
    const response = await axios.get(`/api/posts/${postId}`);
    return response.data;
  }
);

export const addPost = createAsyncThunk("posts/addPost", async (input) => {
  const response = await axios.post("/api/posts/page/1", input);
  return response.data;
});

export const editPost = createAsyncThunk("posts/editPost", async (info) => {
  const response = await axios.put(`/api/posts/${info.id}`, {
    body: info.inputVal,
  });
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const response = await axios.delete(`/api/posts/${id}`);
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
      let posts = [...state, ...action.payload];
      let postIds = posts.map((post) => post.id);
      let uniqIds = new Set(postIds);
      return posts.filter((post) => {
        if (uniqIds.has(post.id)) {
          uniqIds.delete(post.id);
          return true;
        }
        return false;
      });
    },
    [addPost.fulfilled]: (state, action) => {
      return [action.payload, ...state];
    },
    [fetchUserPosts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [fetchSinglePost.fulfilled]: (state, action) => {
      return [action.payload];
    },
  },
});

export const { reset } = postsSlice.actions;
