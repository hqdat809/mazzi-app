import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CategoryService } from 'src/app/service/category.service';

import * as CategoryActions from '../actions/category.action';

@Injectable()
export class CategoryEffects {
  constructor(
    private action$: Actions,
    private categoryService: CategoryService
  ) {}

  loadCategories$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.loadCategories),
      mergeMap(() =>
        this.categoryService.getCategory().pipe(
          map((categories) =>
            CategoryActions.loadCategoriesSuccess({ categories })
          ),
          catchError((error) =>
            of(CategoryActions.loadCategoriesFail({ error }))
          )
        )
      )
    )
  );
}
