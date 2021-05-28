import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  users_table,
  cookbooks_table,
  recipes_table,
  feeds_table,
} from "../../constants/data";
import { RootState } from "../store";

const initialState = {
  users: users_table,
  cookbooks: cookbooks_table,
  recipes: recipes_table,
  feeds: feeds_table,
};

const databaseSlice = createSlice({
  name: "database",
  initialState: initialState,
  reducers: {
    setCookbooks(state, action) {
      const newCookbooks = action.payload;
      state.cookbooks = newCookbooks;
    },
  },
});

// selectors
export const selectUsers = (state: RootState) => state.database.users;
export const selectCookbooks = (state: RootState) => state.database.cookbooks;
export const selectRecipes = (state: RootState) => state.database.recipes;
export const selectFeeds = (state: RootState) => state.database.feeds;

export const databaseActions = databaseSlice.actions;

// redux-persist set up
const persistConfig = {
  key: "database",
  storage,
};

const databasePersistedReducer = persistReducer(
  persistConfig,
  databaseSlice.reducer
);
export default databasePersistedReducer;
