import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const fetchPosts = createAsyncThunk("posts/fetchPosts", async (sortParams) => {
  try {
    const { data } = await axios.get("/posts", {
      params: sortParams,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

const fetchPostsByTag = createAsyncThunk(
  "posts/fetchByTag",
  async ({ name, sortParams }) => {
    const { data } = await axios.get(`/posts/tags/${name}`, {
      params: sortParams,
    });
    return data;
  }
);

const fetchRemovePost = createAsyncThunk("posts/removePost", async (id) => {
  const { data } = await axios.delete(`/posts/${id}`);
  return data;
});

const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
  try {
    const { data } = await axios.get("/tags");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export { fetchPosts, fetchTags, fetchPostsByTag, fetchRemovePost };
