import React, { useState } from "react";

import styles from "./AddComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/actions/commentsActins";

export const AddComment = ({ postId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return alert("comment is empty");

    dispatch(createComment({ postId, text }));
    setText("");
  };

  return (
    <div className={styles.root}>
      <Avatar
        classes={{ root: styles.avatar }}
        src="https://mui.com/static/images/avatar/5.jpg"
      />
      <form onSubmit={onSubmit} className={styles.form}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Write a comment"
          variant="outlined"
          maxRows={10}
          multiline
          fullWidth
        />
        <Button type="submit" variant="contained">
          Отправить
        </Button>
      </form>
    </div>
  );
};
