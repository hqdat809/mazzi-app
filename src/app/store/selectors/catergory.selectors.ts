import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TCategoryState } from '../reducers/category.reducer';

export const getCategoryState =
  createFeatureSelector<TCategoryState>('categories');

export const getCategories = createSelector(
  getCategoryState,
  (state) => state.categories
);

export const getLoading = createSelector(
  getCategoryState,
  (state) => state.loading
);

export const getLoaded = createSelector(
  getCategoryState,
  (state) => state.loaded
);

export const getError = createSelector(
  getCategoryState,
  (state) => state.error
);
