import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams(); // useParams hook returns an object with the params of the current route
  const [searchParams, setSearchParams] = useSearchParams(); // useSearchParams hook returns an object with the search params or query stings of the current route
  const location = useLocation(); // useLocation hook returns an object with the current location

  console.log(params, searchParams.get("name"), location);

  return <p>User</p>;
};

export default UserDetailPage;
