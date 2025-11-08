import React, { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { userInfo, loading } = use(AuthContext);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (userInfo && userInfo.email) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
