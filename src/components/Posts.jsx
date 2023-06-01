import { Grid } from "@mui/material";
import { Post } from "./Post";
import { useSelector } from "react-redux";

export const Posts = ({ sort }) => {
  const userData = useSelector((state) => state.auth.data);
  const { posts } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === "loading";

  if (isPostsLoading) {
    const skeletons = [...Array(5)];
    return (
      <Grid xs={8} item>
        {skeletons.map((_, index) => (
          <Post key={index} isLoading={true} />
        ))}
      </Grid>
    );
  }

  return (
    <Grid xs={8} item>
      {posts.items?.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          imageUrl={post.imageUrl}
          user={post.user}
          createdAt={post.createdAt}
          viewsCount={post.viewsCount}
          commentsCount={3}
          tags={post.tags}
          isEditable={userData?._id === post.user._id}
        />
      ))}
    </Grid>
  );
};
