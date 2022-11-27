import { createAsyncThunk } from "@reduxjs/toolkit";

import { requireAuth, setErrorMessage, resetErrorMessage } from "./user-data/user-data";
import { loadOrders, deleteOrder, completeOrder } from "./orders-data/orders-data";

export const fetchOrdersAction = createAsyncThunk(
  "orders/fetchOrders",
  async (sortingParams, { dispatch, extra: api }) => {
    let query = "/events";

    if (sortingParams.length) {
      const [sortingItem, sortingType] = sortingParams;
      query = `/events?_sort=${sortingItem}&_order=${sortingType}`;
    }
    
    const { data } = await api.get(query);
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
          // Успешная авторизация
          dispatch(requireAuth({ authStatus: "AUTH", user }));
          dispatch(resetErrorMessage());
        } else {
          dispatch(setErrorMessage("Неверный пароль"));
        }
      } else {
        dispatch(setErrorMessage("Пользователь не найден"));
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
  async (data, { dispatch, extra: api }) => {
    try {
      dispatch(completeOrder(data.id));
      await api.put(`/events/${data.id}`, data);
    } catch (error) {
      // handleError(error);
    }
  }
);
