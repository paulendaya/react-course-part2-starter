import { useContext } from "react";
import AuthContext from "./contexts/authContext";

const Welcome = () => {
  const { user } = useContext(AuthContext);
  if (!user) return null;
  return <h3>Welcome, {user}!</h3>;
};

export default Welcome;
