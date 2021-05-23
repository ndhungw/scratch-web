import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  users_table,
  cookbooks_table,
  recipes_table,
  cookbook_recipe_table,
  feeds_table,
} from "../constants/data/index";

const initialState = {
  users: users_table,
  cookbooks: cookbooks_table,
  recipes: recipes_table,
  cookbook_recipe: cookbook_recipe_table,
  feeds: feeds_table,
};

const databaseSlice = createSlice({
  name: "database",
  initialState: initialState,
  reducers: {
    // setUsers: (state, payload) => {},
    // setCookbooks: (state, payload) => {},
    // setRecipes: (state, payload) => {},
    // setCookbookRecipe: (state, payload) => {},
    // setFeeds: (state, payload) => {},
  },
});

// selectors
export const selectUsers = (state) => state.database.users;
export const selectCookbooks = (state) => state.database.cookbooks;
export const selectRecipes = (state) => state.database.recipes;
export const selectCookbookRecipe = (state) => state.database.cookbook_recipe;
export const selectFeeds = (state) => state.database.feeds;

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
