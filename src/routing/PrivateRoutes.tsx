import React from "react";
import { useAuth } from "../state-management/auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  // if the user is not logged in, redirect them to the login page
  // Navigate should be used to redirect the user to another route
  // We cannot use the navigate() because we we want the component to be rendered

  // otherwise, render the protected route inside the Outlet component
  return <Outlet />;
};

export default PrivateRoutes;
