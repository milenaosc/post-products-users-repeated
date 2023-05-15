import axios from "axios";

class UserService {
  static getAllUsers = () => axios.get("https://dummyjson.com/users");
  static getSingleUser = (id) => axios.get(`https://dummyjson.com/users/${id}`);
}

export default UserService;
