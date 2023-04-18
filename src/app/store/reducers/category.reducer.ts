import { createReducer, on } from '@ngrx/store';
import * as CategoryActions from '../actions/category.action';
import { TCategory } from 'src/app/models/category.model';

export interface TCategoryState {
  categories: TCategory[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

const initialState: TCategoryState = {
  categories: [],
  loading: false,
  loaded: false,
  error: '',
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.loadCategories, (state) => ({ ...state, loading: true })),
  on(CategoryActions.loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    loading: false,
    loaded: true,
    categories,
  })),
  on(CategoryActions.loadCategoriesFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);
