import { Link } from "react-router-dom";
import { users } from "./users";

const UserList = () => {
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
          {/* <a href="#">{user.name}</a> */}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
