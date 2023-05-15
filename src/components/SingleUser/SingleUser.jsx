import "./_singleuser.scss";
import { Link } from "react-router-dom";

const SingleUser = ({ user }) => {
  return (
    <Link className="post-card" to={`/userdetail/${user?.id}`}>
      {user?.username}
    </Link>
  );
};

export default SingleUser;
