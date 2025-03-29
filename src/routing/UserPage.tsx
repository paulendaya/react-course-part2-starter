import React from "react";
import UserList from "./UserList";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UserPage = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  // Navigate should be used to redirect the user to another route
  // We cannot use the navigate() because we we want the component to be rendered

  return (
    <div className="row">
      <div className="col-md-6">
        <UserList />
      </div>
      <div className="col-md-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;
