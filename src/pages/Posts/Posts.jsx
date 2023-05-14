import "./_posts.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PostService from "../../services/PostService";
import { getAllPosts } from "../../store/postSlice";
import { React } from "react";
import SinglePost from "../../components/SinglePost/SinglePost";

const Posts = () => {
  const dispatch = useDispatch();

  const { allPosts } = useSelector((state) => state.postStore);

  useEffect(() => {
    PostService.getAllPosts().then((res) => {
      console.log(res.data.posts);
      dispatch(getAllPosts(res.data.posts));
    });
  }, []);

  return (
    <div className="container">
      {allPosts.map((item) => (
        <SinglePost key={item?.id} post={item}>
          {item?.title}
        </SinglePost>
      ))}
    </div>
  );
};

export default Posts;
