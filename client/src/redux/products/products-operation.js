import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthInstance, instance } from '../../API/api';

export const getProducts = createAsyncThunk(
  '/products/get',
  async (requestData, ThunkAPI) => {
    const { page, filter, search } = requestData;
    if (filter || search || page) {
      try {
        const { data } = await instance.get(
          `/api/products?page=${page}${filter ? `&category=${filter}` : ''}${search ? `&search=${search}` : ''}`
        );
        return data;
      } catch (error) {
        return ThunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const getProductsByName = createAsyncThunk(
  '/products/search',
  async (requestData, ThunkAPI) => {
    const { page, search } = requestData;
    if (search) {
      try {
        const { data } = await instance.get(`/api/products/search/${search}/?page=${page}`);
        if (data.length < 1) {
          return ThunkAPI.rejectWithValue("empty");
        }
        console.log(data);
        return data;
      } catch (error) {
        return ThunkAPI.rejectWithValue(error.message);
      }
    }
  }
)

export const getFilteredProducts = createAsyncThunk(
  '/products/get/filtered',
  async (category, ThunkAPI) => {
    try {
      const { data } = await instance.get(`/api/products?category=${category}`);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  '/products/get/all',
  async (_, ThunkAPI) => {
    try {
      const { data } = await instance.get('/api/products/all');
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsById = createAsyncThunk(
  '/products/get/id',
  async (productsId, ThunkAPI) => {
    try {
      const { data } = await instance.get(`/api/products/${productsId}`, );
      return data;
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
    const {_id} = updateData;
    try {
      const { data } = await AuthInstance.put(`/api/products/${_id}`, updateData);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getComingSoonProducts = createAsyncThunk(
  '/products/get/filtered',
  async (_, ThunkAPI) => {
    try {
      const { data } = await instance.get(`/api/products/comingSoon`);
      return data.products;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);