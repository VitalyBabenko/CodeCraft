import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/posts";
import { authReducer } from "./reducers/auth";
import { uploadReducer } from "./reducers/upload";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    upload: uploadReducer,
  },
});

export default store;
