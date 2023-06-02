import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../actions/userActions";

const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // fetch user info
    [fetchUser.pending]: (state) => {
      state.isLoading = true;
      state.user = [];
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    [fetchUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.error.message;
    },
  },
});

export const userReducer = userSlice.reducer;
