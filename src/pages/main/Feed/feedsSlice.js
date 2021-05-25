import { createSlice } from "@reduxjs/toolkit";
import { feeds_table } from "../../../constants/data/index";

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
    saveRecipePending(state) {
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
export const selectFeeds = (state) => state.feeds.feeds;
export const selectIsLoading = (state) => state.feeds.isLoading;
export const selectError = (state) => state.feeds.error;
export const selectMessage = (state) => state.feeds.message;

export const feedsActions = feedsSlice.actions;

export default feedsReducer;
