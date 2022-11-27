import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAuthStatus, getUser } from "../../store/selectors"
import { logoutAction } from "../../store/api-actions";
import { APP_ROUTE, AUTH_STATUS } from "../../const";
import "./style.css";

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector(getAuthStatus);
  const user = useSelector(getUser);

  useEffect(() => {
    if (authStatus !== AUTH_STATUS.AUTH) {
      navigate(APP_ROUTE.LOGIN);
    }
  }, [authStatus, navigate]);

  const handleLogout = (evt) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="navigation">
      <Link className="navigation__link" to={APP_ROUTE.MAIN}>
        Все заказы
      </Link>
      <Link className="navigation__link" to={APP_ROUTE.ADD_ORDER}>
        Добавить заказ
      </Link>
      <span className="navigation__user-name">{user.name}</span>
      <button
        className="navigation__logout"
        type="button"
        onClick={handleLogout}
      >
        Выйти
      </button>
    </nav>
  );
}

export default Navigation;
