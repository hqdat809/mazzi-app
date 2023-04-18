import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TWord } from 'src/app/models/word.model';
import { AppState } from 'src/app/store/reducers';
import { TCategory } from 'src/app/models/category.model';
import * as WordSelectors from 'src/app/store/selectors/word.selector';
import * as CategorySelectors from 'src/app/store/selectors/catergory.selectors';

import * as CategoryActions from '../../store/actions/category.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  categories: TCategory[] = [];
  listWord: TWord[] = [];
  selectedCategoryId: number | undefined;
  loading: boolean = false;
  error: string = '';
  subscriptions: Subscription[] = [];
  modalTitle = 'Modal Title';
  isModalOpen = false;

  constructor(private store: Store<AppState>) {
    const categorySubscription = this.store
      .select(CategorySelectors.getCategories)
      .subscribe((data) => {
        this.categories = data;
        this.selectedCategoryId = data[0]?.categoryId;
      });
    const listWordSubscription = this.store
      .select(WordSelectors.getListWord)
      .subscribe((data) => {
        this.listWord = data;
      });
    const loadingSubscription = this.store
      .select(CategorySelectors.getLoading)
      .subscribe((data) => (this.loading = data));
    const errorSubscription = this.store
      .select(CategorySelectors.getError)
      .subscribe((data) => (this.error = data));
    this.subscriptions.push(
      categorySubscription,
      listWordSubscription,
      loadingSubscription,
      errorSubscription
    );
  }

  ngOnInit(): void {
    this.store.dispatch(CategoryActions.loadCategories());
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
