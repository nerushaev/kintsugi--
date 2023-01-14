import { createSlice } from '@reduxjs/toolkit';
import { getProducts, addProducts, removeProduct, updateProduct } from './products-operation';

const productsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  extraReducers: {
    [getProducts.pending]: handlePending,
    [getProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getProducts.rejected]: handleRejected,
    [addProducts.pending]: handlePending,
    [addProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addProducts.rejected]: handleRejected,
    [removeProduct.pending]: (state) => {
      state.isLoading = false;
    },
    [removeProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        product => product._id !== action.payload._id
      );
    },
    [updateProduct.pending]: handlePending,
    [updateProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map(product => product._id === action.payload._id ? action.payload : product);
    },
    [updateProduct.rejected]: handleRejected,
  },
});

export const productsReducer = productsSlice.reducer;