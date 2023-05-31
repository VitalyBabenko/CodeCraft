import { Grid } from "@mui/material";
import { Post } from "./Post";
import { useSelector } from "react-redux";

export const Posts = ({ posts, isLoading }) => {
  const userData = useSelector((state) => state.auth.data);

  if (isLoading) {
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
      {posts.items.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          imageUrl={post.imageUrl}
          // imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
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
