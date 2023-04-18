import { createAction, props } from '@ngrx/store';
import { TCategory } from 'src/app/models/category.model';

export enum ELoadCategory {
  LoadCategory = '[Category] Load Categories',
  LoadCategorySuccess = '[Category] Load Categories Success',
  LoadCategoryFail = '[Category] Load Categories Fail',
}

export const loadCategories = createAction(ELoadCategory.LoadCategory);
export const loadCategoriesSuccess = createAction(
  ELoadCategory.LoadCategorySuccess,
  props<{ categories: TCategory[] }>()
);
export const loadCategoriesFail = createAction(
  ELoadCategory.LoadCategoryFail,
  props<{ error: string }>()
);
