import { createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { PERSISTED_USER_KEY } from "../../constants/key";

import { KitchenSectorType, UserInfoType } from "../../ts/types";

type userSliceObj = {
  isAuthenticated: boolean;
  error: string;
  isLoading: boolean;
  currentUser: UserInfoType | null; // user info
  recipes: KitchenSectorType | null;
  saved: KitchenSectorType | null;
  following: any;
};

const initialState: userSliceObj = {
  isAuthenticated: false,
  error: "",
  isLoading: false,
  currentUser: null, // user info
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
      if (action.payload) state.currentUser = action.payload;
    },
    setAvatarSrc(state, action) {
      if (action.payload) {
        if (state.currentUser) {
          state.currentUser.avatarSrc = action?.payload;
        }
      }
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

      if (state.saved) {
        const newCookbooks = state.saved.cookbooks.map((book) => {
          if (book.id === idCookbook) {
            const newRecipesList = [...book.recipesList, recipeToAdd];

            book.recipesCount = book.recipesCount + 1;
            book.recipesList = newRecipesList;
          }
          return book;
        });

        state.saved = {
          ...state.saved,
          totalCount: state.saved.totalCount + 1,
          cookbooks: newCookbooks,
        };
      }
    },
    // eslint-disable-next-line no-unused-vars
    loginRequest(state, action) {
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
      state.currentUser = null;
      state.recipes = null;
      state.saved = null;
      state.following = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.recipes = null;
      state.saved = null;
      state.following = null;
      state.error = "";
    },
  },
});

export const selectError = (state: RootStateOrAny) => state.user.error;
export const selectIsLoading = (state: RootStateOrAny) => state.user.isLoading;
export const selectIsAuthenticated = (state: RootStateOrAny) =>
  state.user.isAuthenticated;
export const selectCurrentUser = (state: RootStateOrAny) =>
  state.user.currentUser;
export const selectRecipesSector = (state: RootStateOrAny) =>
  state.user.recipes;
export const selectSavedSector = (state: RootStateOrAny) => state.user.saved;
export const selectFollowingSector = (state: RootStateOrAny) =>
  state.user.following;

export const userActions = userSlice.actions;

// redux-persist set up
const persistConfig = {
  key: PERSISTED_USER_KEY,
  storage,
};

const userPersistedReducer = persistReducer(persistConfig, userSlice.reducer);
export default userPersistedReducer;
