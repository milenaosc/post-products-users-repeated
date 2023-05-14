import "./_postdetail.scss";
import PostService from "../../services/PostService";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getSinglePost } from "../../store/postSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { currentPost } = useSelector((state) => state.postStore);

  useEffect(() => {
    PostService.getSinglePost(id).then((res) => {
      dispatch(getSinglePost(res.data));
      console.log(res);
    });
  }, []);

  return <div className="container">{currentPost?.body}</div>;
};

export default PostDetail;
