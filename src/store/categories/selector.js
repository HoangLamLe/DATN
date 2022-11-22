/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCategoriesState = (state) => state.categoriesStore || initialState;

const makeSelectLoading = () => createSelector(selectCategoriesState, (state) => state.isLoading);

const makeSelectCategories = () => createSelector(selectCategoriesState, (state) => state.categories);

const makeSelectError = () => createSelector(selectCategoriesState, (state) => state.error);

export { selectCategoriesState, makeSelectLoading, makeSelectError, makeSelectCategories };
