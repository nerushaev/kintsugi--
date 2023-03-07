import { createSlice } from '@reduxjs/toolkit';
import { getProducts, addProducts, removeProduct, updateProduct, getAllProducts, getComingSoonProducts, getProductsById } from './products-operation';

const productsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  comingSoonProducts: [],
  busket: [],
  details: [],
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
  reducers: {
    addToBusket(state, action) {
      const itemInCart = state.busket.find((item) => item._id === action.payload._id);
      if (itemInCart) {
      itemInCart.quantity++;
      } else {
        state.busket.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.busket.find((item) => item._id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.busket.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        const removeItem = state.busket.filter((item) => item._id !== action.payload);
        state.busket = removeItem;
      } else {
        item.quantity--;
      }
    },
  },
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
        product => product._id !== action.payload
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
    [getComingSoonProducts.pending]: handlePending,
    [getComingSoonProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.comingSoonProducts = action.payload;
      // state.currentPage = action.payload.currentPage;
      // state.totalPages = action.payload.totalPages;
    },
    [getComingSoonProducts.rejected]: handleRejected,
    [getProductsById.pending]: handlePending,
    [getProductsById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.details = action.payload;
    },
    [getProductsById.rejected]: handleRejected,
  },
});

export const { addToBusket, incrementQuantity, decrementQuantity } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;