import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  return (
    <div>
      {post?.title} <Link to={`/posts/detail/${post?.id}`}>Detail</Link>{" "}
    </div>
  );
};

export default SinglePost;
