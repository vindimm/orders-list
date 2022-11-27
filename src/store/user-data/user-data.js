import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  authStatus: "UNKNOWN",
  errorMessage: "",
};

export const userData = createSlice({
  name: "USER",
  initialState,
  reducers: {
    requireAuth: (state, action) => {
      state.authStatus = action.payload.authStatus;
      state.user = action.payload.user;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    resetErrorMessage: (state) => {
      state.errorMessage = "";
    }
  },
});

export const { requireAuth, setErrorMessage, resetErrorMessage } = userData.actions;
