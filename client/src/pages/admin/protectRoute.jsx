import { Outlet, Navigate } from "react-router-dom";

export const ProtectAdminRoutes = () => {
  const isAdminLoggedIn = localStorage.getItem("lexi-admin-loggedin") || null;
  return isAdminLoggedIn ? <Outlet /> : <Navigate to="/admin/signin" />;
};
