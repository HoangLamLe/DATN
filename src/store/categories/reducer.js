import { createReducer } from "../../utils/redux";
import * as Types from "./constants";

export const initialState = {
  isLoading: false,
  error: null,
  categories: [],
};

const fetchCategoriesRequest = (state) => ({
  ...state,
  isLoading: true,
});

const fetchCategoriesSuccess = (state, action) => ({
  ...state,
  isLoading: false,
  categories: action.payload,
});

const fetchCategoriesFailure = (state, action) => ({
  ...state,
  error: action.payload,
});

export default createReducer(initialState, {
  [Types.FETCH_CATEGORIES_REQUEST]: fetchCategoriesRequest,
  [Types.FETCH_CATEGORIES_SUCCESS]: fetchCategoriesSuccess,
  [Types.FETCH_CATEGORIES_FAILURE]: fetchCategoriesFailure,
});
