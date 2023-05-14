import { React } from "react";
import axios from "axios";

class PostService {
  static getAllPosts = () => axios.get("https://dummyjson.com/posts");
}

export default PostService;
