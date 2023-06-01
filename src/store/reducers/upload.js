import { createSlice } from "@reduxjs/toolkit";
import { uploadImage } from "../actions/uploadAcion";

const initialState = {
  isLoading: false,
  imageUrl: "",
  error: null,
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    clearImageUrl: (state) => {
      state.imageUrl = null;
    },
  },
  extraReducers: {
    [uploadImage.pending]: (state) => {
      state.isLoading = true;
      state.imageUrl = "";
      state.error = null;
    },
    [uploadImage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.imageUrl = action.payload;
      state.error = null;
    },
    [uploadImage.rejected]: (state, action) => {
      state.isLoading = false;
      state.imageUrl = "";
      state.error = action.error.message;
    },
  },
});

export const uploadReducer = uploadSlice.reducer;

export const { setImageUrl, clearImageUrl } = uploadSlice.actions;
