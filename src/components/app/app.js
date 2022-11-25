import { Route, Routes, Navigate } from "react-router-dom";

import PrivateRoute from "../private-route/private-route";
import LoginPage from "../pages/login-page/login-page";
import MainPage from "../pages/main-page/main-page";
import OrderPage from "../pages/events-page/events-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to={"/login"} />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route
          path={"/main"}
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/order"}
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
