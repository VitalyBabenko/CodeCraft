import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const fetchLogin = createAsyncThunk("auth/fetchAuth", async (params) => {
  try {
    const { data } = await axios.post("/auth/login", params);
    return data;
  } catch (e) {
    console.log(e);
  }
});

const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});

const fetchRegister = createAsyncThunk("auth/fetchRegister", async (params) => {
  try {
    const { data } = await axios.post("/auth/register", params);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export { fetchLogin, fetchAuthMe, fetchRegister };
