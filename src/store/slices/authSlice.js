import { createSlice } from "@reduxjs/toolkit";
import { USER_SAMPLE } from "../../constants/data";

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
      // state.currentUser = action.payload;

      const currentUserStringified = localStorage.getItem("user");
      if (currentUserStringified) {
        state.currentUser = JSON.parse(currentUserStringified);
      } else {
        const userToLogin = USER_SAMPLE;
        localStorage.setItem("user", JSON.stringify(userToLogin));
        state.currentUser = userToLogin;
      }
    },
    logout(state, action) {
      console.log(`${action.payload}`);
      state.isAuthenticated = false;
      state.currentUser = null;
      localStorage.removeItem("user");
    },
  },
});

// selectors
export const getIsLoading = (state) => state.auth.isLoading;
export const getCurrentUser = (state) => state.auth.currentUser;

export const authActions = authSlice.actions;

export default authSlice.reducer;
