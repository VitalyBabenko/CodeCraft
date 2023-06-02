import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const fetchUser = createAsyncThunk("user/fetch", async () => {
  try {
    const { data } = await axios.get(`/auth/me`);

    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export { fetchUser };
