import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, AuthInstance } from '../../API/api';

export const getProducts = createAsyncThunk(
  '/products/get',
  async (requestData, ThunkAPI) => {
    const { page, filter } = requestData;
    if (filter) {
      try {
        const { data } = await instance.get(`/api/products?page=${page}&category=${filter}`);
        return data;
      } catch (error) {
        return ThunkAPI.rejectWithValue(error.message);
      }
    } else {
        try {
          const { data } = await instance.get(`/api/products?page=${page}`);
        return data;
      } catch (error) {
        return ThunkAPI.rejectWithValue(error.message);
      }
      }
  }
);

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
      console.log(data);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getProductsById = createAsyncThunk(
//   '/products/get/id',
//   async (dataId, ThunkAPI) => {
//     const productsId = dataId.join('_id=')
//     try {
//       const { data } = await instance.get(`/api/products/_id=${productsId}`, );
//       console.log(data);
//       return data;
//     } catch (error) {
//       return ThunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const addProducts = createAsyncThunk(
  '/products/add',
  async (newProduct, ThunkAPI) => {
    newProduct.forEach((value, key) => {
      console.log(`key:${key}, value:${value}`);
    })
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
    const id = updateData.get('_id');
    updateData.delete('_id')
    try {
      const { data } = await instance.put(`/api/products/${id}`, updateData);
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