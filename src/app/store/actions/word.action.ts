import { createAction, props } from '@ngrx/store';

import { TWord } from 'src/app/models/word.model';

export enum ELoadWord {
  LoadListWord = '[Word] Word Categories',
  LoadListWordSuccess = '[Word] Load Word Success',
  LoadListWordFail = '[Word] Load Word Fail',
}

export const loadListWord = createAction(
  ELoadWord.LoadListWord,
  props<{ categoryId: number }>()
);
export const loadListWordSuccess = createAction(
  ELoadWord.LoadListWordSuccess,
  props<{ listWord: TWord[] }>()
);
export const loadListWordFail = createAction(
  ELoadWord.LoadListWordFail,
  props<{ error: string }>()
);
