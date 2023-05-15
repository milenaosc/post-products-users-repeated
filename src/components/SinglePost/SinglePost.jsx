import React from "react";
import { Link } from "react-router-dom";
import "./_singlepost.scss";

const SinglePost = ({ post }) => {
  return (
    <Link className="post-card-1" to={`/posts/detail/${post?.id}`}>
      {post?.title}
    </Link>
  );
};

export default SinglePost;
