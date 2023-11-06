import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/CartSlice";
import userSliceReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
