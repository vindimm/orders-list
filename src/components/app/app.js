import { Route, Routes, Navigate } from "react-router-dom";

import PrivateRoute from "../private-route/private-route";
import LoginPage from "../pages/login-page/login-page";
import MainPage from "../pages/main-page/main-page";
import AddOrderPage from "../pages/add-order-page/add-order-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import { APP_ROUTE } from "../../const";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to={APP_ROUTE.LOGIN} />} />
        <Route path={APP_ROUTE.LOGIN} element={<LoginPage />} />
        <Route
          path={APP_ROUTE.MAIN}
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route
          path={APP_ROUTE.ADD_ORDER}
          element={
            <PrivateRoute>
              <AddOrderPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
