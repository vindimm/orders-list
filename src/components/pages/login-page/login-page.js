import "./style.css";
import Layout from "../../layout/layout";

function LoginPage() {
  return (
    <Layout>
      <form className="login-form">
        <input
          className="login-form__input login-form__interactive"
          type="text"
          placeholder="username"
          required
        />
        <input
          className="login-form__input login-form__interactive"
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
