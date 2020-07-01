import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";
import { postsSlice } from "./postsSlice";
import { authorsSlice } from "./authorsSlice";
import { errorSlice } from "./errorSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    error: errorSlice.reducer,
    posts: postsSlice.reducer,
    author: authorsSlice.reducer,
  },
});

export default store;
