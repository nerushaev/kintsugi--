import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../API/api";

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const result = await api.register(data);
      console.log(result);
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      rejectWithValue(error);
    }
  }
);

// export const signup = createAsyncThunk(
//   "auth/signup",
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.signup(data);
//       return result;
//     } catch ({ responce }) {
//       const error = {
//         status: responce.status,
//         message: responce.data.message,
//       }
//       return rejectWithValue(error);
//     };
//   }
// );

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

// export const logout = createAsyncThunk(
//   "auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       const result = await api.logout();
//       return result;
//     } catch ({ responce }) {
//       const error = {
//         status: responce.status,
//         message: responce.data.message,
//       }
//       return rejectWithValue(error);
//     };
//   }
// )

export const current = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
