import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAuthStatus } from "../../store/selectors"
import { logoutAction } from "../../store/api-actions";
import "./style.css";

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector(getAuthStatus);

  useEffect(() => {
    if (authStatus !== "AUTH") {
      navigate("/login");
    }
  }, [authStatus, navigate]);

  const handleLogout = (evt) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/main">
        Все заказы
      </Link>
      <Link className="navigation__link" to="/add-event">
        Добавить заказ
      </Link>
      <span className="navigation__user-name">Имя Фамилия</span>
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
