import { useEffect, useState } from "react";

import { Post } from "../components/Post";
import { CommentsBlock } from "../components/CommentsBlock";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { AddComment } from "../components/AddComment/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../store/actions/commentsActins";

export const FullPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { comments } = useSelector((state) => state.comments);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/posts/${id}`);
      setPost(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      alert("Error getting post");
    }
  };

  useEffect(() => {
    fetchPost();
    dispatch(fetchComments(id));
  }, []);

  if (isLoading) {
    return <Post isLoading={true} />;
  }

  return (
    <>
      <Post
        id={post._id}
        title={post.title}
        imageUrl={post.imageUrl ? post.imageUrl : ""}
        user={post.user}
        createdAt={post.createdAt}
        viewsCount={post.viewsCount}
        commentsCount={3}
        tags={post.tags}
        isFullPost
      >
        <ReactMarkdown children={post.text} />
      </Post>
      <CommentsBlock items={comments} isLoading={false}>
        <AddComment postId={id} />
      </CommentsBlock>
    </>
  );
};
