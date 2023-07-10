import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../API/api";

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.AuthInstance.post("/api/auth/register", data);
      return result.data;
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
      const result = await api.AuthInstance.post("/api/auth/login", data);
      return result.data;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.AuthInstance.post("/api/auth/logout");
      return result.status;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      api.setToken(auth.token);
      const result = await api.AuthInstance.get("/api/auth/current");
      return result.data;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.AuthInstance.get("/api/auth/refresh");
      return result.data;
      // return result.data;
    } catch ({ responce }) {
      const error = {
        status: responce.status,
        message: responce.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
