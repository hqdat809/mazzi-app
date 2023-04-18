import { TCategoryState, categoryReducer } from './category.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { TWordState, wordReducer } from './word.reducer';

export interface AppState {
  categories: TCategoryState;
  listWord: TWordState;
}

export const reducers: ActionReducerMap<AppState> = {
  categories: categoryReducer,
  listWord: wordReducer,
};
