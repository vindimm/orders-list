import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

// import { redirectToRoute } from "./actions";
import { loadEvents } from "./events-data/events-data";
import { requireAuth } from "./user-data/user-data";

export const fetchEventsAction = createAsyncThunk(
  "events/fetchEvents",
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get("/events");
    dispatch(loadEvents(data));
  }
);

export const loginAction = createAsyncThunk(
  "user/login",
  async ({ login: username, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get(`/users?user=${username}`, {username, password});
      const [user] = data;

      if (user) {
        if (user.password === password) {
          dispatch(requireAuth({ authStatus: "AUTH", user }));
          // Успешная авторизация
        } else {
          // Неверный пароль
        }
      } else {
        // Пользователь не найден
      }
    } catch(error) {
      dispatch(requireAuth({ authStatus: "NO_AUTH"}));
    }
  },
);

export const logoutAction = createAsyncThunk(
  "user/logout",
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(requireAuth({authorizationStatus: "NO_AUTH"}));
    } catch(error) {
      // handleError(error);
    }
  }
);
