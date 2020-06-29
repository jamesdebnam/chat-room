import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { combineReducers } from "redux";

const fetchUserLogin = createAsyncThunk(
  "login/fetchUserLogin",
  async (username) => {
    const response = await axios.get(`/api/users/${username}`);
    console.log(response);
    return response.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    username: "",
  },
  reducers: {
    logout: () => {
      return {
        isLoggedIn: false,
        username: "",
      };
    },
  },
  extraReducers: {
    [fetchUserLogin.fulfilled]: (state, action) => {
      state = { isLoggedIn: true, username: action.payload.username };
      return state;
    },
  },
});

export default combineReducers({ login: loginSlice.reducer });
