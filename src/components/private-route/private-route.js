import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuthStatus } from "../../store/selectors";
import { AUTH_STATUS, APP_ROUTE } from "../../const";

function PrivateRoute({ children }) {
  const authStatus = useSelector(getAuthStatus);

  return authStatus === AUTH_STATUS.AUTH ? children : <Navigate to={APP_ROUTE.LOGIN} />;
}

export default PrivateRoute;
