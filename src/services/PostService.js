import axios from "axios";

class PostService {
  static getAllPosts = () => axios.get("https://dummyjson.com/posts");
  static getSinglePost = (id) => axios.get(`https://dummyjson.com/posts/${id}`);
}

export default PostService;
