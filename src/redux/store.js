import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import addProductSlice from "./features/stock/addProductSlice";
import saleCart from "./features/sale/saleCart";

export const store = configureStore({
  reducer: {
    products: addProductSlice,
    saleProducts: saleCart,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
