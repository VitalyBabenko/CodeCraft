import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/posts";
import { authReducer } from "./reducers/auth";
import { uploadReducer } from "./reducers/upload";
import { commentsReducer } from "./reducers/comments";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    upload: uploadReducer,
    comments: commentsReducer,
  },
});

export default store;
