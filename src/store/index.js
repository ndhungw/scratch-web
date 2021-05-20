import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userKitchenReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userKitchen: userKitchenReducer,
  },
});

export default store;
