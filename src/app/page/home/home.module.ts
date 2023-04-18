import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SideBarComponent } from 'src/app/component/side-bar/side-bar.component';
import { WordCardComponent } from 'src/app/component/word-card/word-card.component';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListWordComponent } from './list-word/list-word.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { FormsModule } from '@angular/forms';

export const homeRoutes = [
  { path: '', component: HomeComponent },
  { path: ':categoryId', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent,
    ListWordComponent,
    WordCardComponent,
    ModalDetailComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(homeRoutes)],
})
export class HomeModule {}
