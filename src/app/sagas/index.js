import { fork, takeEvery } from "redux-saga/effects";
import { feedsActions } from "../../pages/main/Feed/feedsSlice";
import { userActions } from "../userSlice";
import { handleLoginRequest } from "./auth/login";
import { handleSaveRecipeFromFeedRequest } from "./main/feed";

function* watchAuthActions() {
  yield takeEvery(userActions.loginRequest, handleLoginRequest);
}

function* watchFeedActions() {
  yield console.log("watching feed actions");

  yield takeEvery(
    feedsActions.saveRecipePending,
    handleSaveRecipeFromFeedRequest
  );
}

function* rootSaga() {
  yield fork(watchAuthActions);
  yield fork(watchFeedActions);
}

export default rootSaga;
