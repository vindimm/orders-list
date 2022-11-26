import { useRef } from "react";
import { useDispatch } from "react-redux";

import { loginAction } from "../../../store/api-actions";
import Layout from "../../layout/layout";
import "./style.css";

function LoginPage() {
  const dispatch = useDispatch();
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(loginRef.current.value);
    dispatch(loginAction({login: loginRef.current.value, password: passwordRef.current.value}));
  };

  return (
    <Layout>
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
      </form>
    </Layout>
  );
}

export default LoginPage;
