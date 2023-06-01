import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const uploadImage = createAsyncThunk("upload/uploadImage", async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const { data } = await axios.post("/upload", formData);
    console.log(data);
    return data.url;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export { uploadImage };
