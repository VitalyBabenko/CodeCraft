import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/posts";
import { authReducer } from "./reducers/auth";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});

export default store;
