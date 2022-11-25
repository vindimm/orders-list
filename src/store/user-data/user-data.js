import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  password: undefined,
  name: undefined,
  role: undefined,
  authStatus: 'UNKNOWN',
};

export const userData = createSlice({
  name: "USER",
  initialState,
  reducers: {
    requireAuth: (state, action) => {
      state.authStatus = action.payload.authorizationStatus;
      state.user = action.payload.user;
    },
  },
});

export const {requireAuthorization} = userData.actions;
