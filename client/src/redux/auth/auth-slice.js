import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  current,
  register,
  refreshToken,
  logout,
} from "./auth-operations";

const initialState = {
  user: {},
  token: "",
  isLogin: false,
  loading: false,
  error: null,
  busket: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [refreshToken.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [refreshToken.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      store.loading = false;
      store.isLogin = true;
    },
    [refreshToken.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
    },
    [register.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [register.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      store.loading = false;
      store.isLogin = true;
    },
    [register.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
    },
    [login.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.user = payload.user;
      store.token = payload.token;
      store.loading = false;
      store.isLogin = true;
    },
    [login.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
    },
    [logout.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: (store, { payload }) => {
      store.user = {};
      store.token = "";
      store.loading = false;
      store.isLogin = false;
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [current.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.user = payload;
      store.loading = false;
      store.isLogin = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

// [refreshToken.pending]: store => {
//   store.loading = true;
//   store.error = null;
// },
// [refreshToken.fulfilled]: (store, { payload }) => {
//   store.user = payload.user;
//   store.token = payload.token;
//   store.loading = false;
//   store.isLogin = true;
// },
// [refreshToken.rejected]: (store, { error }) => {
//   store.loading = false;
//   store.error = error;
// },
// [restorePassword.pending]: store => {
//   store.loading = true;
//   store.error = null;
// },
// [restorePassword.fulfilled]: (store, _) => {
//   store.loading = false;
// },
// [restorePassword.rejected]: (store, { error }) => {
//   store.loading = false;
//   store.error = error;
// },

export default authSlice.reducer;
