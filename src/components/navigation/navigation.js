import { Link } from "react-router-dom";
import "./style.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/main">Все заказы</Link>
      <Link className="navigation__link" to="/order">Добавить заказ</Link>
      <span className="navigation__user-name">Имя Фамилия</span>
      <button className="navigation__logout" type="button">Выйти</button>
    </nav>
  );
}

export default Navigation;
