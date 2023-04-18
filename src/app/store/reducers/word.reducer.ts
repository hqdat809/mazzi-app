import { createReducer, on } from '@ngrx/store';
import * as WordActions from '../actions/word.action';
import { TCategory } from 'src/app/models/category.model';
import { TWord } from 'src/app/models/word.model';

export interface TWordState {
  listWord: TWord[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

const initialState: TWordState = {
  listWord: [],
  loading: false,
  loaded: false,
  error: '',
};

export const wordReducer = createReducer(
  initialState,
  on(WordActions.loadListWord, (state) => ({ ...state, loading: true })),
  on(WordActions.loadListWordSuccess, (state, { listWord }) => ({
    ...state,
    loading: false,
    loaded: true,
    listWord,
  })),
  on(WordActions.loadListWordFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);
