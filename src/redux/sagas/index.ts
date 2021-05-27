import { fork, takeEvery } from "redux-saga/effects";
import { feedsActions } from "../slices/feed/feedSlice";
import { userActions } from "../slices/userSlice";
import { handleLoginRequest } from "./auth/loginSaga";
import { handleSaveRecipeFromFeedRequest } from "./feed/feedSaga";

function* watchAuthActions() {
  yield takeEvery(userActions.loginRequest, handleLoginRequest);
}

function* watchFeedActions() {
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
