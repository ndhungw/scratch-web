import { configureStore } from "@reduxjs/toolkit";

// new
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import feedsReducer from "../pages/main/Feed/feedsSlice";
import databasePersistedReducer from "./databaseSlice";
import userPersistedReducer from "./userSlice";

const store = configureStore({
  reducer: {
    database: databasePersistedReducer,
    user: userPersistedReducer,
    feeds: feedsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
