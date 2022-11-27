import { Link } from "react-router-dom";

import { APP_ROUTE } from "../../../const";
import "./style.css";

function NotFoundPage() {
  return (
    <>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <Link to={APP_ROUTE.MAIN}>На главную</Link>
    </>
  );
}

export default NotFoundPage;
