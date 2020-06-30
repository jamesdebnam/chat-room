import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const fetchUserLogin = createAsyncThunk(
  "login/fetchUserLogin",
  async (username) => {
    const response = await axios.get(`/login/${username}`);
    return response.data;
  }
);

export const errorSlice = createSlice({
  name: "error",
  initialState: "",
  reducers: {
    resetError: () => "",
  },
  extraReducers: {
    [fetchUserLogin.rejected]: () =>
      "Sorry, that username doesn't exist. Have you registered?",
  },
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    username: "",
    userId: null,
  },
  reducers: {
    logout: () => {
      return {
        isLoggedIn: false,
        username: "",
        userId: null,
      };
    },
  },
  extraReducers: {
    [fetchUserLogin.fulfilled]: (state, action) => {
      state = {
        isLoggedIn: true,
        username: action.payload.username,
        userId: action.payload.id,
      };
      return state;
    },
  },
});

export const { logout } = loginSlice.actions;
export const { resetError } = errorSlice.actions;
