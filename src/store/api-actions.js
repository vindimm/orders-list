import { createAsyncThunk } from "@reduxjs/toolkit";

import { loadEvents } from "./events-data/events-data";

export const fetchOrdersAction = createAsyncThunk(
  'orders/fetchAllOrders',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get('/events');
    dispatch(loadEvents(data));
  }
);
