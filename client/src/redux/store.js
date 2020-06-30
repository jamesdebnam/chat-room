import { configureStore } from "@reduxjs/toolkit";
import { loginSlice, errorSlice } from "./loginSlice";
import { postsSlice } from "./postsSlice";
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    error: errorSlice.reducer,
    posts: postsSlice.reducer,
  },
});

export default store;
