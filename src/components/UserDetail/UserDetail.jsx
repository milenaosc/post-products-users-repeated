import "./_userdetail.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import UserService from "../../services/UserService";
import { getSingleUser } from "../../store/userSlice";

const UserDetail = () => {
  const { currentUser } = useSelector((state) => state.userStore);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    UserService.getSingleUser(id).then((res) => {
      console.log(res.data);
      dispatch(getSingleUser(res.data));
    });
  }, []);
  return (
    <div className="container">
      {currentUser ? (
        <div>
          <h1>{currentUser.username}</h1>
          <div>
            name: {currentUser.firstName} {currentUser.lastName}
          </div>
        </div>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};

export default UserDetail;
