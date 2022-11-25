import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  isDataLoaded: false,
};

export const eventsData = createSlice({
  name: "EVENTS",
  initialState,
  reducers: {
    loadEvents: (state, action) => {
      state.events = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const { loadEvents } = eventsData.actions;
