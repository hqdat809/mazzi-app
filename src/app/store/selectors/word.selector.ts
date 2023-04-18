import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TCategoryState } from '../reducers/category.reducer';
import { TWordState } from '../reducers/word.reducer';

export const getWordState = createFeatureSelector<TWordState>('listWord');

export const getListWord = createSelector(
  getWordState,
  (state) => state.listWord
);

export const getLoading = createSelector(
  getWordState,
  (state) => state.loading
);

export const getLoaded = createSelector(getWordState, (state) => state.loaded);

export const getError = createSelector(getWordState, (state) => state.error);
