import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import { fetchPosts } from "../store/actions/postsActions";
import { Posts } from "../components/Posts";

export const Home = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(0);

  useEffect(() => {
    let sortBy = "";
    if (sort === 0) sortBy = "createdAt";
    if (sort === 1) sortBy = "viewsCount";
    if (sort === 2) sortBy = "commentsCount";

    const sortParams = {
      sortBy,
      orderBy: "desc",
    };

    dispatch(fetchPosts(sortParams));
  }, [sort]);

  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={sort}
        aria-label="basic tabs example"
      >
        <Tab label="New" onClick={() => setSort(0)} />
        <Tab label="Popular" onClick={() => setSort(1)} />
        <Tab label="Discussed" onClick={() => setSort(2)} />
      </Tabs>
      <Grid container spacing={4}>
        <Posts />
        <Grid xs={4} item>
          <TagsBlock />
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
      </Grid>
    </>
  );
};
