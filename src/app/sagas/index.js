import { fork, takeEvery } from "redux-saga/effects";
import { userActions } from "../userSlice";
import { handleLoginRequest } from "./auth/login";

function* watchAuthActions() {
  // console.log("watchAuthActions:", action);
  yield console.log(
    "watching auth actions-loginRequest:",
    userActions.loginRequest
  );
  yield takeEvery(userActions.loginRequest, handleLoginRequest);
  yield console.log(
    "watchAuthActions- after take(userActions.loginRequest.type, handleLoginRequest)"
  );
}

function* watchCreateTaskAction() {
  yield console.log("watching create task");
}

function* rootSaga() {
  yield console.log("this is root saga");
  yield fork(watchAuthActions);
  yield fork(watchCreateTaskAction);
  yield console.log("end the root saga");
}

export default rootSaga;
