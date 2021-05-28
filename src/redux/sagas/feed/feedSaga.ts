import {
  call,
  put,
  // , select
} from "redux-saga/effects"; // select = selector

import { feedsActions } from "../../slices/feed/feedSlice";
import { databaseActions } from "../../slices/databaseSlice";
import { userActions } from "../../slices/userSlice";

import { saveRecipe } from "../../../services/api";

export function* handleSaveRecipeFromFeedRequest(action: {
  payload: { idFeed: string; idCookbook: string };
}): any {
  try {
    const { idFeed, idCookbook } = action.payload;

    const response = yield call(saveRecipe, idFeed, idCookbook);

    const { message, error, recipeToAdd, newCookbooks } = response;

    if (!error) {
      yield put(databaseActions.setCookbooks(newCookbooks));
      yield put(
        feedsActions.saveRecipeSuccess({ message, error, recipeToAdd })
      );
      yield put(
        userActions.saveRecipeFromFeedSuccess({ idCookbook, recipeToAdd })
      );
    }
  } catch (err) {
    console.log(err);
    yield put(feedsActions.saveRecipeFailure(err.message));
  }
}
