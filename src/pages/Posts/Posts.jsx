import "./_posts.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PostService from "../../services/PostService";
import { getAllPosts } from "../../store/postSlice";

const Posts = () => {
  const dispatch = useDispatch();

  const { allPosts } = useSelector((state) => state.postStore);

  useEffect(() => {
    PostService.getAllPosts().then((res) =>
      dispatch(getAllPosts(res.data.posts))
    );
  }, []);
  return (
    <div>
      Posts
      {allPosts.map((el) => el.title)}
    </div>
  );
};

export default Posts;
