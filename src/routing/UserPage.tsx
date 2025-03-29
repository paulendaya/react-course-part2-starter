import React from "react";
import UserList from "./UserList";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UserPage = () => {

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
