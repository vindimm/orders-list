import { createAsyncThunk } from "@reduxjs/toolkit";

import { requireAuth, setErrorMessage, resetErrorMessage } from "./user-data/user-data";
import { loadOrders, deleteOrder, completeOrder } from "./orders-data/orders-data";
import { AUTH_STATUS, API_ROUTE } from "../const";

export const fetchOrdersAction = createAsyncThunk(
  "orders/fetchOrders",
  async (sortingParams, { dispatch, extra: api }) => {
    let query = API_ROUTE.ORDERS;

    if (sortingParams.length) {
      const [sortingItem, sortingType] = sortingParams;
      query = `${API_ROUTE.ORDERS}?_sort=${sortingItem}&_order=${sortingType}`;
    }
    
    const { data } = await api.get(query);
    dispatch(loadOrders(data));
  }
);

export const loginAction = createAsyncThunk(
  "user/login",
  async ({ login: username, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get(`${API_ROUTE.USERS}?user=${username}`, {
        username,
        password,
      });
      const [user] = data;

      if (user) {
        if (user.password === password) {
          // Успешная авторизация
          dispatch(requireAuth({ authStatus: AUTH_STATUS.AUTH, user }));
          dispatch(resetErrorMessage());
        } else {
          dispatch(setErrorMessage("Неверный пароль"));
        }
      } else {
        dispatch(setErrorMessage("Пользователь не найден"));
      }
    } catch (error) {
      dispatch(requireAuth({ authStatus: AUTH_STATUS.NO_AUTH }));
    }
  }
);

export const logoutAction = createAsyncThunk(
  "user/logout",
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(requireAuth({ authStatus: AUTH_STATUS.NO_AUTH }));
    } catch (error) {
      // handleError(error);
    }
  }
);

export const deleteOrderAction = createAsyncThunk(
  "order/delete",
  async (id, { dispatch, extra: api }) => {
    try {
      await api.delete(`${API_ROUTE.ORDERS}/${id}`);
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
      await api.post(API_ROUTE.ORDERS, data);
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
      await api.put(`${API_ROUTE.ORDERS}/${data.id}`, data);
    } catch (error) {
      // handleError(error);
    }
  }
);
