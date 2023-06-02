import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";
import { Posts } from "../../components/Posts";
import { CommentsBlock } from "../../components/CommentsBlock";
import { UserBlock } from "../../components/UserBlock/UserBlock";

export const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
    console.log(user);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Grid container spacing={4}>
      <Grid xs={4} item>
        <UserBlock fullName={user.fullName} email={user.email} />
        <CommentsBlock
          items={[
            {
              user: {
                fullName: "Вася Пупкин",
                avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
              },
              text: "Это тестовый комментарий",
            },
            {
              user: {
                fullName: "Иван Иванов",
                avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
              },
              text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
            },
          ]}
          isLoading={false}
        />
      </Grid>
      <Posts />
    </Grid>
  );
};
