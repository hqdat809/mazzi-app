import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { WordService } from 'src/app/service/word.service';
import * as WordActions from '../actions/word.action';

@Injectable()
export class WordEffects {
  constructor(private action$: Actions, private wordService: WordService) {}

  loadListWord$ = createEffect(() =>
    this.action$.pipe(
      ofType(WordActions.loadListWord),
      mergeMap(({ categoryId }) => {
        return this.wordService.getListWord(categoryId).pipe(
          map((res) => WordActions.loadListWordSuccess({ listWord: res.data })),
          catchError((error) => of(WordActions.loadListWordFail({ error })))
        );
      })
    )
  );
}
