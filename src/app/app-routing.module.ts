import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notices',
    loadChildren: () => import('./pages/notices.module').then((m) => m.NoticesModule),
  },
  {
    path: '**',
    redirectTo: 'notices'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
