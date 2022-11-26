import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  authStatus: "UNKNOWN",
};

export const userData = createSlice({
  name: "USER",
  initialState,
  reducers: {
    requireAuth: (state, action) => {
      state.authStatus = action.payload.authoStatus;
      state.user = action.payload.user;
    },
  },
});

export const { requireAuth } = userData.actions;
