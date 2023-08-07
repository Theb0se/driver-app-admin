import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import subcatSlice from "./subcatSlice";

const store = configureStore({
  reducer: {
    Products: productReducer,
    subCategory: subcatSlice,
    Users: userReducer,
  },
});

export default store;
