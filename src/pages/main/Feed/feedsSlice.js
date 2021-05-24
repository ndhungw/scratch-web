import {
  // createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
// import { getFeeds } from "../../../api";
import { feeds_table } from "../../../constants/data/index";

// export const getAllFeeds = createAsyncThunk("feeds/getAllFeeds", async () => {
//   const feeds = await getFeeds();
//   return feeds;
// });

const feedsSlice = createSlice({
  name: "feeds",
  initialState: {
    feeds: feeds_table,
    isLoading: false,
    error: "",
    message: "",
  },
  reducers: {
    saveRecipePending(state) {
      state.isLoading = true;
    },
    saveRecipeSuccess(state, action) {
      console.log(
        "feedSlice - saveRecipeSuccess - action.payload:",
        action.payload
      );
      const { message } = action.payload;
      state.message = message;
      state.error = "";
      state.isLoading = false;
    },
    saveRecipeFailure(state, action) {
      console.log(
        "feedSlice - saveRecipeFailure - action.payload:",
        action.payload
      );
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
