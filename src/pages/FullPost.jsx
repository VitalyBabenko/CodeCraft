import { useEffect, useState } from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const FullPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(comments);

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

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`/comments/${id}`);

      const commentsInfo = data.map((item) => {
        const user = {
          fullName: item.owner.fullName,
          avatarUrl: item.owner.avatarUrl,
        };

        const result = {
          text: item.text,
          user,
        };

        return result;
      });

      setComments(commentsInfo);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
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
        <Index />
      </CommentsBlock>
    </>
  );
};
