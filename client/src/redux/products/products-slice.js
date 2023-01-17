import { createSlice } from '@reduxjs/toolkit';
import { getProducts, addProducts, removeProduct, updateProduct, getAllProducts, getComingSoonProducts } from './products-operation';

const productsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  comingSoonProducts: [],
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
      state.items = action.payload.products;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
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
    [getAllProducts.pending]: handlePending,
    [getAllProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.products;
    },
    [getAllProducts.rejected]: handleRejected,
    [getComingSoonProducts.pending]: handleRejected,
    [getComingSoonProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.comingSoonProducts = action.payload;
      // state.currentPage = action.payload.currentPage;
      // state.totalPages = action.payload.totalPages;
    },
    [getComingSoonProducts.rejected]: handleRejected,
  },
});

export const productsReducer = productsSlice.reducer;