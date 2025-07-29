
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.status);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
