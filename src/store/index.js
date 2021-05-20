import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

// new
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware({
    // this way you don't remove the middlewares
    serializableCheck: false,
  }),
});

export default store;
