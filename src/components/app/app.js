import { Route, Routes, Navigate } from "react-router-dom";

import PrivateRoute from "../private-route/private-route";
import LoginPage from "../login-page/login-page";
import MainPage from "../main-page/main-page";
import OrderPage from "../order-page/order-page";
import NotFoundPage from "../not-found-page/not-found-page";

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
