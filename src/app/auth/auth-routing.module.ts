import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
        {
          path: '',
          redirectTo: 'login',
          pathMatch: 'prefix'
        },
        {
            path: 'login',
            canActivate: [],
            component: LoginComponent
        },
        {
            path: 'register',
            canActivate: [],
            component: RegisterComponent
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
