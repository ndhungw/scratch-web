import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { PERSISTED_USER_KEY } from "../constants/key";

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
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setAvatarSrc(state, action) {
      state.currentUser.avatarSrc = action.payload;
    },
    setRecipesSector(state, action) {
      state.recipes = action.payload;
    },
    setSavedSector(state, action) {
      state.saved = action.payload;
    },
    setFollowingSector(state, action) {
      state.following = action.payload;
    },
    saveRecipeFromFeedRequest(state) {
      state.isLoading = true;
    },
    saveRecipeFromFeedSuccess(state, action) {
      const { idCookbook, recipeToAdd } = action.payload;
      console.log({ action });

      const newCookbooks = state.saved.cookbooks.map((book) => {
        if (book.id === idCookbook) {
          book.recipesList = [...book.recipesList, recipeToAdd];
        }
        return book;
      });

      console.log("saveRecipeFromFeedSuccess - newCookbooks: ", newCookbooks);

      state.saved = {
        ...state.saved,
        totalCount: state.saved.totalCount + 1,
        cookbooks: newCookbooks,
      };
    },
    loginRequest(state) {
      state.isLoading = true;
    },
    loginSuccess(state, action) {
      const {
        isAuthenticated,
        isLoading,
        error,
        currentUser,
        recipes,
        saved,
        following,
      } = action.payload;
      state.recipes = recipes;
      state.saved = saved;
      state.following = following;
      state.error = error;
      state.currentUser = currentUser;
      state.isAuthenticated = isAuthenticated;
      state.isLoading = isLoading;
      // state = { ...action.payload }; // this way will not work
    },
    loginError(state, action) {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.currentUser = {};
      state.recipes = null;
      state.saved = null;
      state.following = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = {};
      state.recipes = null;
      state.saved = null;
      state.following = null;
      state.error = null;
    },
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
