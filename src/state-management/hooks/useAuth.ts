import { useContext } from "react";
import AuthContext from "../contexts/authContext";

// With using a hook, we don't need to think to use a particular context to access the user state and dispatch function
const useAuth = () => useContext(AuthContext);

export default useAuth;
