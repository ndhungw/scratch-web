import { createSlice } from "@reduxjs/toolkit";
import { USER_SAMPLE } from "../../constants/data";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  isLoading: true,
  currentUser: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action) {
      console.log(
        "authSlice - setCurrentUser - action.payload=",
        action.payload
      );
      state.currentUser = action.payload;
    },
    setIsLoading(state, action) {
      console.log("setIsLoading: ", action.payload);
      state.isLoading = action.payload;
    },
    login(state, action) {
      console.log("authSlice- action.payload", action.payload);
      state.isAuthenticated = true;
      if (!state.currentUser) {
        state.currentUser = USER_SAMPLE;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});

// selectors
export const getIsLoading = (state) => state.auth.isLoading;
export const getCurrentUser = (state) => state.auth.currentUser;

export const authActions = authSlice.actions;

// redux-persist set up
const persistConfig = {
  key: "user",
  storage,
};

const authPersistedReducer = persistReducer(persistConfig, authSlice.reducer);
export default authPersistedReducer;
