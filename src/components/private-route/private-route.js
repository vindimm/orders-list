import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuthStatus } from "../../store/selectors";

function PrivateRoute({ children }) {
  const authStatus = useSelector(getAuthStatus);

  return authStatus === "AUTH" ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;
