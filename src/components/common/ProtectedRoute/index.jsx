import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const publicPaths = [
    "/",
    "/login",
    "/signup",
    "/signup/center",
    "/signup/manager",
  ];
  const isPublicPath = publicPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  if (!token && !isPublicPath) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
