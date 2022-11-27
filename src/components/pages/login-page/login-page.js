import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuthStatus, getErrorMessage } from "../../../store/selectors";
import { loginAction } from "../../../store/api-actions";
import { AUTH_STATUS, APP_ROUTE } from "../../../const";
import Layout from "../../layout/layout";
import "./style.css";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const authStatus = useSelector(getAuthStatus);
  const errorMessage = useSelector(getErrorMessage);

  useEffect(() => {
    if (authStatus === AUTH_STATUS.AUTH) {
      navigate(APP_ROUTE.MAIN);
    }
  }, [authStatus, navigate]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };

  return (
    <Layout>
      <div className="login-page__container">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-form__input login-form__interactive"
            ref={loginRef}
            type="text"
            placeholder="username"
            required
          />
          <input
            className="login-form__input login-form__interactive"
            ref={passwordRef}
            type="password"
            placeholder="password"
            minLength="8"
            required
          />
          <button
            className="login-form__button login-form__interactive"
            type="submit"
          >
            Войти
          </button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </Layout>
  );
}

export default LoginPage;
