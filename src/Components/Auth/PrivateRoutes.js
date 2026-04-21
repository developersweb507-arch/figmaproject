// PrivateRoute.js
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem("login");

  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;