import { createSlice } from "@reduxjs/toolkit";
import { createComment, fetchComments } from "../actions/commentsActins";

const initialState = {
  isLoading: false,
  comments: [],
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // fetch comments
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
      state.comments = [];
      state.error = null;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      state.error = null;
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.error = action.error.message;
    },

    // create comment
    [createComment.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [createComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, action.payload];
      state.error = null;
    },
    [createComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.imageUrl = "";
      state.error = action.error.message;
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
