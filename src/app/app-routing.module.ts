import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'prefix'
  },
  {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
