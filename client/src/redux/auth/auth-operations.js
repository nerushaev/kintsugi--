import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import * as api from "../../API/api";
import { useCookies } from "react-cookie";

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.AuthInstance.post("/api/auth/register", data);
      if (result) {
        setTimeout(
          Notify.success("регістрація пройшла успішно!", {
            borderRadius: "0px",
          }),
          20000
        );
      }
      return result.data;
    } catch (error) {
      console.log(error);
      if (error) {
        setTimeout(
          Notify.failure(error.data.message, {
            borderRadius: "0px",
          }),
          20000
        );
      }
      return rejectWithValue(error.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.instance.post("/api/auth/login", data);
      if (result) {
        setTimeout(
          Notify.success(`${result.data.user.name} з поверненням!`, {
            borderRadius: "0px",
          }),
          20000
        );
      }
      return result.data;
    } catch ({ response }) {
      console.log();
      if (response) {
        setTimeout(
          Notify.failure(response.statusText, {
            borderRadius: "0px",
          }),
          20000
        );
      }
      const error = {
        status: response.status,
        message: response.statusText,
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
      console.log(result);
      api.setToken("");
      return result;
    } catch (error) {
      if (error) {
        setTimeout(
          Notify.success(error, {
            borderRadius: "0px",
          }),
          20000
        );
      }
      return rejectWithValue(error.error);
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
      // return result.data;
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
