import { combineReducers } from "@reduxjs/toolkit";

import { ordersData } from "./orders-data/orders-data";
import { userData } from "./user-data/user-data";

export const rootReducer = combineReducers({
  ORDERS_DATA: ordersData.reducer,
  USER_DATA: userData.reducer,
});
