import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, requireAuth }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  if (requireAuth && !isAuthenticated) {
    // User is not logged in but trying to access a protected route
    return <Navigate to="/signup" replace />;
  } else if (!requireAuth && isAuthenticated) {
    // User is logged in but trying to access a public route (signin, signup, landing)
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
