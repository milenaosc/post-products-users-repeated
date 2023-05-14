import axios from "axios";

class UserService {
  static getAllUsers = () => axios.get("https://dummyjson.com/users");
}

export default UserService;
