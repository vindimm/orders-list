import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const authStatus = "ADMIN";

  return authStatus === "ADMIN" || authStatus === "GUEST" ? (
    children
  ) : (
    <Navigate to={"/login"} />
  );
}

export default PrivateRoute;
