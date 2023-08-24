import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import React from "react";

const AdminRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, role } = useAuth();
  return isLoggedIn && role === "user" ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};

export default AdminRoute;
