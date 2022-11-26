import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  loadOrders,
  deleteOrder,
  completeOrder,
} from "./orders-data/orders-data";
import { requireAuth } from "./user-data/user-data";

export const fetchOrdersAction = createAsyncThunk(
  "orders/fetchOrders",
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get("/events");
    dispatch(loadOrders(data));
  }
);

export const loginAction = createAsyncThunk(
  "user/login",
  async ({ login: username, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get(`/users?user=${username}`, {
        username,
        password,
      });
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
    } catch (error) {
      dispatch(requireAuth({ authStatus: "NO_AUTH" }));
    }
  }
);

export const logoutAction = createAsyncThunk(
  "user/logout",
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(requireAuth({ authStatus: "NO_AUTH" }));
    } catch (error) {
      // handleError(error);
    }
  }
);

export const deleteOrderAction = createAsyncThunk(
  "order/delete",
  async (id, { dispatch, extra: api }) => {
    try {
      await api.delete(`/events/${id}`);
      dispatch(deleteOrder(id));
    } catch (error) {
      // handleError(error);
    }
  }
);

export const addOrderAction = createAsyncThunk(
  "order/add",
  async (data, { dispatch, extra: api }) => {
    try {
      await api.post(`/events`, data);
    } catch (error) {
      // handleError(error);
    }
  }
);

export const completeOrderAction = createAsyncThunk(
  "order/complete",
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(completeOrder(id));
    } catch (error) {
      // handleError(error);
    }
  }
);
