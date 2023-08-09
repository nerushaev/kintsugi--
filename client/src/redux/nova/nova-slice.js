import { createSlice } from "@reduxjs/toolkit";
import { getCities, getWarehouses } from "./nova-operation";

const novaInitialState = {
  city: "",
  cityRef: "",
  warehouse: "",
  recipientWarehouseIndex: "",
  warehouseRef: "",
  warehouseAddress: "",
  cities: [],
  warehouses: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const novaSlice = createSlice({
  name: "nova",
  initialState: novaInitialState,
  reducers: {
    selectCity(state, { payload }) {
      state.city = payload.city;
      state.cityRef = payload.cityRef;
    },
    removeCitiesList(state, _) {
      state.cities = [];
    },
    selectWarehouse(state, { payload }) {
      state.warehouseAddress = payload.ShortAddress;
      state.warehouseRef = payload.Ref;
      state.recipientWarehouseIndex = payload.WarehouseIndex;
      state.warehouse = payload.Description;
    },
    removeWarehousesList(state, _) {
      state.warehouses = [];
    },
  },
  extraReducers: {
    [getWarehouses.pending]: handlePending,
    [getWarehouses.fulfilled](state, { payload }) {
      state.warehouses = payload;
      state.loading = false;
    },
    [getWarehouses.pending]: handleRejected,
    [getCities.pending]: handlePending,
    [getCities.fulfilled](state, { payload }) {
      state.cities = payload;
      state.loading = false;
    },
    [getCities.pending]: handleRejected,
  },
});
export const {
  selectCity,
  removeCitiesList,
  selectWarehouse,
  removeWarehousesList,
} = novaSlice.actions;
export const novaReducer = novaSlice.reducer;
