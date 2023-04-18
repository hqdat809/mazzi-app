import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { ListWordComponent } from './list-word/list-word.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { SideBarComponent } from 'src/app/page/home/side-bar/side-bar.component';

export const homeRoutes = [
  { path: '', component: HomeComponent },
  { path: ':categoryId', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent,
    ListWordComponent,
    ModalDetailComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(homeRoutes)],
})
export class HomeModule {}
