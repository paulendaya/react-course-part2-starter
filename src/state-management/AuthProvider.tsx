import React, { useReducer } from "react";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";

interface Props {
  children: React.ReactNode;
}

// We create a custom provider that will be used to pass the state down the tree
// Also to makde things modular, so if we decide to pass the state somewhere else

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
