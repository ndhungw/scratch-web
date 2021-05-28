import { createSlice } from "@reduxjs/toolkit";

import { feeds_table } from "../../../constants/data";

import { FeedType } from "../../../ts/types";

const feedsSlice = createSlice({
  name: "feeds",
  initialState: {
    feeds: feeds_table,
    isLoading: false,
    error: "",
    message: "",
  },
  reducers: {
    clearSnackbarInfo(state) {
      state.error = "";
      state.message = "";
      state.isLoading = false;
    },
    //
    // eslint-disable-next-line no-unused-vars
    saveRecipePending(state, action) {
      state.isLoading = true;
    },
    saveRecipeSuccess(state, action) {
      const { message } = action.payload;
      state.message = message;
      state.error = "";
      state.isLoading = false;
    },
    saveRecipeFailure(state, action) {
      state.error = action.payload;
      state.message = "";
      state.isLoading = false;
    },
  },
});

const feedsReducer = feedsSlice.reducer;

// selectors
export const selectFeeds = (state: { feeds: { feeds: FeedType[] } }) =>
  state.feeds.feeds;
export const selectIsLoading = (state: { feeds: { isLoading: boolean } }) =>
  state.feeds.isLoading;
export const selectError = (state: { feeds: { error: string } }) =>
  state.feeds.error;
export const selectMessage = (state: { feeds: { message: string } }) =>
  state.feeds.message;

export const feedsActions = feedsSlice.actions;

export default feedsReducer;
