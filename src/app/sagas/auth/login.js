import { getFollowingSector, getKitchenSector, getUser } from "../../../api";
import { call, put } from "redux-saga/effects";
import { userActions } from "../../userSlice";

export function* handleLoginRequest(action) {
  const { username, password } = action.payload;
  console.log(`username: ${username} - password: ${password}`);

  try {
    // call fake API, return user if found
    const user = yield call(getUser, username, password);
    console.log("handleLoginRequest-user: ", user);

    if (!user) {
      yield put(userActions.loginError("Wrong username or password"));
      console.log("handleLoginRequest: wrong username or password");
      return;
    }
    yield console.log("saga-auth-handleLogin-user: ", user);

    // get kitchen data
    const recipesSector = yield call(
      getKitchenSector,
      user.id,
      "recipes" === "saved"
    );
    const savedSector = yield call(
      getKitchenSector,
      user.id,
      "saved" === "saved"
    );
    const followingSector = yield call(getFollowingSector, user.id);

    yield put(
      userActions.loginSuccess({
        isAuthenticated: true,
        isLoading: false,
        error: "",
        currentUser: user,
        recipes: recipesSector,
        saved: savedSector,
        following: followingSector,
      })
    );
  } catch (err) {
    yield console.log(err);
    yield put(userActions.loginError(err.message));
  }
}
