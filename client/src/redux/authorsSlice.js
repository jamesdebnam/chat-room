import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostAuthor = createAsyncThunk(
  "authors/fetchPostAuthor",
  async (id) => {
    const response = await axios.get(`/api/user/${id}`);
    return response.data;
  }
);

export const authorsSlice = createSlice({
  name: "authors",
  initialState: {},
  extraReducers: {
    [fetchPostAuthor.fulfilled]: (state, { payload }) => {
      state[payload.id] = payload.username;
    },
  },
});
