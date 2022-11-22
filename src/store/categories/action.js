import * as Types from './constants';

export const fetchCategoriesRequest = (payload) => ({
  type: Types.FETCH_CATEGORIES_REQUEST,
  payload,
});

export const fetchCategoriesSuccess = (payload) => ({
  type: Types.FETCH_CATEGORIES_SUCCESS,
  payload: payload,
});

export const fetchCategoriesFailure = (error) => ({
  type: Types.FETCH_CATEGORIES_FAILURE,
  payload: error,
});
