import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFeeds } from "../../../api";
import { feeds_table } from "../../../constants/data/index";

export const getAllFeeds = createAsyncThunk("feeds/getAllFeeds", async () => {
  const feeds = await getFeeds();
  return feeds;
});

const feedsSlice = createSlice({
  name: "feeds",
  initialState: {
    feeds: feeds_table,
    isLoading: false,
    error: "",
  },
  reducer: {},
  extraReducers: {
    [getAllFeeds.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllFeeds.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getAllFeeds.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
  },
});

const feedsReducer = feedsSlice.reducer;

export const selectFeeds = (state) => state.feeds.feeds;

export const feedsActions = feedsSlice.actions;

export default feedsReducer;
