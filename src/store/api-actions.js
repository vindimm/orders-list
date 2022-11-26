import { createAsyncThunk } from "@reduxjs/toolkit";

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
    const { data: user } = await api.post("/users", { username, password });
    dispatch(requireAuth({ authStatus: "AUTH", user }));
  }
);
