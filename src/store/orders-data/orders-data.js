import { createSlice } from "@reduxjs/toolkit";

import { ORDER_STATUS } from "../../const";

const initialState = {
  orders: [],
  isDataLoaded: false,
};

export const ordersData = createSlice({
  name: "ORDERS",
  initialState,
  reducers: {
    loadOrders: (state, action) => {
      state.orders = action.payload;
      state.isDataLoaded = true;
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter((order) => order.id !== action.payload);
    },
    completeOrder: (state, action) => {
      state.orders.find((order) => order.id === action.payload).status = ORDER_STATUS.COMPLETED;
    },
  },
});

export const { loadOrders, deleteOrder, completeOrder } = ordersData.actions;
