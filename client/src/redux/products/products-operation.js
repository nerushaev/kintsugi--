import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../API/api';

export const getProducts = createAsyncThunk(
  '/products/get',
  async (_, ThunkAPI) => {
    try {
      const { data } = await instance.get("/api/products/");
      return data.products;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProducts = createAsyncThunk(
  '/products/add',
  async (newProduct, ThunkAPI) => {
    try {
      const { data } = await instance.post("/api/products/", newProduct);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  '/products/remove',
  async (productId, ThunkAPI) => {
    try {
      const { data } = await instance.delete(`/api/products/${productId}`);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  '/products/update',
  async (updateData, ThunkAPI) => {
    const { _id } = updateData;
    try {
      await instance.put(`/api/products/${_id}`, updateData);
      return updateData;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);