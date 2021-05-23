import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  getCookbooks,
  getFollowingSector,
  getKitchenSector,
  getUser,
} from "../api";
import { users_table } from "../constants/data/index";
import { PERSISTED_USER_KEY } from "../constants/key";

export const getMe = createAsyncThunk(
  "user/getMe",
  async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    // const currentUser = await api.getCurrentUser();
    // return currentUser;
  }
);

const initialState = {
  isAuthenticated: false,
  error: "",
  isLoading: false,
  currentUser: {}, // user info
  recipes: null,
  saved: null,
  following: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action) {
      console.log(
        "userSlice - setCurrentUser - action.payload=",
        action.payload
      );
      state.currentUser = action.payload;
    },
    setAvatarSrc(state, action) {
      console.log("userSlice - setAvatarSrc - action.payload=", action.payload);
      state.currentUser.avatarSrc = action.payload;
    },
    setIsLoading(state, action) {
      console.log("setIsLoading: ", action.payload);
      state.isLoading = action.payload;
    },
    login(state, action) {
      console.log("userSlice- action.payload", action.payload);
      const loginInfo = action.payload;
      console.log("loginInfo: ", loginInfo);

      // check username & password
      const user = users_table.find((user) => {
        console.log("username: ", user.username);
        console.log("password: ", user.password);
        if (
          user.username === loginInfo.username &&
          user.password === loginInfo.password
        ) {
          return user;
        }
      });
      console.log({ user });

      if (!user) {
        state.error = "Wrong username or password";
        return;
      }

      // get user kitchen sectors
      const recipesSector = getKitchenSector(user.id, "recipes" === "saved");
      const savedSector = getKitchenSector(user.id, "saved" === "saved");
      const followingSector = getFollowingSector(user.id);

      state.recipes = recipesSector;
      state.saved = savedSector;
      state.following = followingSector;

      // authenticate
      state.error = "";
      state.isAuthenticated = true;
      state.currentUser = user;
      state.isLoading = false;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.recipes = null;
      state.saved = null;
      state.following = null;
      state.error = null;
    },
  },
  // example using thunk in redux-toolkit
  extraReducers: {
    // [getMe.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [getMe.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    // },
    // [getMe.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.currentUser = action.payload;
    // },
  },
});

export const selectError = (state) => state.user.error;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectRecipesSector = (state) => state.user.recipes;
export const selectSavedSector = (state) => state.user.saved;
export const selectFollowingSector = (state) => state.user.following;

export const userActions = userSlice.actions;

// redux-persist set up
const persistConfig = {
  key: PERSISTED_USER_KEY,
  storage,
};

const userPersistedReducer = persistReducer(persistConfig, userSlice.reducer);
export default userPersistedReducer;
