import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const fetchComments = createAsyncThunk("comments/fetch", async (postId) => {
  try {
    const { data } = await axios.get(`/comments/${postId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const createComment = createAsyncThunk(
  "comments/create",
  async ({ postId, text }) => {
    if (!text) return alert("Comment is empty");

    try {
      const { data } = await axios.post(`/comments/${postId}`, {
        text,
      });
      return data;
    } catch (err) {
      console.log(err);
      alert("Comment is empty");
    }
  }
);

export { createComment, fetchComments };
