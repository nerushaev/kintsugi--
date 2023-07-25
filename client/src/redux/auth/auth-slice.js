import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  current,
  register,
  refreshToken,
  logout,
  updateUser,
  restorePassword,
} from "./auth-operations";

const initialState = {
  user: {
    delivery: {},
    busket: [],
  },
  token: "",
  isLogin: false,
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [refreshToken.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [refreshToken.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.isLogin = true;
    },
    [refreshToken.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
    [register.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.isLogin = true;
    },
    [register.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
    [login.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.isLogin = true;
    },
    [login.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
    [logout.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.user = {};
      state.token = "";
      state.loading = false;
      state.isLogin = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [current.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [current.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.isLogin = true;
    },
    [current.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
    [updateUser.pending]: handlePending,
    [updateUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user.delivery = payload;
    },
    [updateUser.rejected]: handleRejected,
    [restorePassword.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [restorePassword.fulfilled]: (store, _) => {
      store.loading = false;
    },
    [restorePassword.rejected]: (store, { error }) => {
      store.loading = false;
      store.error = error;
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
