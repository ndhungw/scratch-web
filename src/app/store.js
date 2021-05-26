import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import feedsReducer from "../pages/main/Feed/feedsSlice";
import databasePersistedReducer from "./databaseSlice";
import userPersistedReducer from "./userSlice";
import rootSaga from "./sagas/index";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    database: databasePersistedReducer,
    user: userPersistedReducer,
    feeds: feedsReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: false,
    }),
    ...middlewares,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
