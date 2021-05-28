import { call, put } from "redux-saga/effects";

import { userActions } from "../../slices/userSlice";

import { getKitchenData, getUser } from "../../../services/api";

export function* handleLoginRequest(action: {
  payload: { username: string; password: string };
}): any {
  const { username, password } = action.payload;

  try {
    // call fake API, return user if found
    const user = yield call(getUser, username, password);

    if (!user) {
      yield put(userActions.loginError("Wrong username or password"));
      return;
    }

    // get kitchen data (call fake API)
    const kitchenData = yield call(getKitchenData, user.id);

    yield put(
      userActions.loginSuccess({
        isAuthenticated: true,
        isLoading: false,
        error: "",
        currentUser: user,
        recipes: kitchenData.recipes,
        saved: kitchenData.saved,
        following: kitchenData.following,
      })
    );
  } catch (err) {
    yield put(userActions.loginError(err.message));
  }
}
