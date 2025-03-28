import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { users } from "./users";

const UserDetailPage = () => {
  const params = useParams(); // useParams hook returns an object with the params of the current route
  const [searchParams, setSearchParams] = useSearchParams(); // useSearchParams hook returns an object with the search params or query stings of the current route
  const location = useLocation(); // useLocation hook returns an object with the current location

  console.log(params, searchParams.get("name"), location);
  // The ! operator tells TypeScript that params.id is definitely not undefined at this point. This is safe here because we're already checking for params.id existence in the same line.
  // empty {" "} is to insert a space between the text and the dynamic content
  // When JSX code is rendered, adjacent text elements are concatenated without spaces by default. Therefore, adding {" "} ensures that there is a space between the static text "User" and the dynamically computed content. This is done to improve the readability and presentation of the final output for the user.
  return (
    <p>
      User{" "}
      {params.id &&
        users.find((user) => user.id === parseInt(params.id!))?.name}
    </p>
  );
};

export default UserDetailPage;
