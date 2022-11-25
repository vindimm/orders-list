import { combineReducers } from "@reduxjs/toolkit";

import { eventsData } from "./events-data/events-data";
import { userData } from "./user-data/user-data";

export const rootReducer = combineReducers({
  EVENTS_DATA: eventsData.reducer,
  USER_DATA: userData.reducer,
});
