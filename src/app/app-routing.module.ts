import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const appRoutes = [
  {
    path: '',
    loadChildren: () =>
      import('./page/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
