import { Route, Routes, Navigate } from "react-router-dom";

import PrivateRoute from "../private-route/private-route";
import LoginPage from "../pages/login-page/login-page";
import MainPage from "../pages/main-page/main-page";
import AddEventPage from "../pages/add-event-page/add-event-page";
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
          path={"/add-event"}
          element={
            <PrivateRoute>
              <AddEventPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
