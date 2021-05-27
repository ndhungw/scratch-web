import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  users_table,
  cookbooks_table,
  recipes_table,
  feeds_table,
} from "../../constants/data";
import { CookbookType, FeedType, RecipeType } from "../../ts/types";

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
export const selectUsers = (state: { database: { users: any } }) =>
  state.database.users;
export const selectCookbooks = (state: {
  database: { cookbooks: CookbookType[] };
}) => state.database.cookbooks;
export const selectRecipes = (state: { database: { recipes: RecipeType[] } }) =>
  state.database.recipes;
export const selectFeeds = (state: { database: { feeds: FeedType[] } }) =>
  state.database.feeds;

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
