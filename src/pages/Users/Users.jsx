import "./_users.scss";
import { useSelector, useDispatch } from "react-redux";
import UserService from "../../services/UserService";
import { useEffect } from "react";
import { getAllUsers } from "../../store/userSlice";
import SingleUser from "../../components/SingleUser/SingleUser";

const Users = () => {
  const { allUsers } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  useEffect(() => {
    UserService.getAllUsers().then((res) => {
      console.log(res.data);
      dispatch(getAllUsers(res.data.users));
    });
  }, []);
  return (
    <div className="container">
      {allUsers?.map((item) => (
        <SingleUser key={item?.id} user={item} />
      ))}
    </div>
  );
};

export default Users;
