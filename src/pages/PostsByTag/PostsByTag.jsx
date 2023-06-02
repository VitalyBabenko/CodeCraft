import { Container, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./PostsByTag.module.scss";
import { Posts } from "../../components/Posts";
import { fetchPostsByTag } from "../../store/actions/postsActions";

export const PostsByTag = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
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

    dispatch(fetchPostsByTag({ name, sortParams }));
  }, [sort]);

  if (!name) {
    return <div>loading</div>;
  }

  return (
    <Container className={style.root} maxWidth="lg">
      <h1># {name}</h1>
      <Tabs
        style={{ marginBottom: 15 }}
        value={sort}
        aria-label="basic tabs example"
      >
        <Tab label="New" onClick={() => setSort(0)} />
        <Tab label="Popular" onClick={() => setSort(1)} />
        <Tab label="Discussed" onClick={() => setSort(2)} />
      </Tabs>
      <Posts sort={sort} />
    </Container>
  );
};
