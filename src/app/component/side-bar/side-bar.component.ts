import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { TCategory } from 'src/app/models/category.model';
import { AppState } from 'src/app/store/reducers';
import * as WordActions from '../../store/actions/word.action';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit, OnChanges {
  @Input() listItem: TCategory[] = [];

  activatedId: number | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['listItem'] &&
      this.listItem.length > 0 &&
      this.router.url === '/'
    ) {
      this.activatedId = this.listItem[0]?.categoryId;
      this.store.dispatch(
        WordActions.loadListWord({ categoryId: this.listItem[0]?.categoryId })
      );
      console.log(this.router.url);
    }
  }

  ngOnInit() {
    this.route.params.subscribe((value) => {
      this.activatedId = value['categoryId'];
      if (this.router.url !== '/') {
        this.store.dispatch(
          WordActions.loadListWord({ categoryId: value['categoryId'] })
        );
      }
    });
  }

  onSelect(categoryId: number) {
    this.router.navigate([categoryId]);
    this.store.dispatch(WordActions.loadListWord({ categoryId }));
  }
}
