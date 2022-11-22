import { call, put, takeLatest } from "redux-saga/effects";

import * as Types from "./constants";
import { fetchCategories } from "../../services/categories.API";
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "./action";

export function* fetchCategoriesSaga({ payload }) {
  try {
    const response = yield call(fetchCategories, payload);

    if (response) {
      yield put(fetchCategoriesSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export default function* categoriesSaga() {
  yield takeLatest(Types.FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
}
