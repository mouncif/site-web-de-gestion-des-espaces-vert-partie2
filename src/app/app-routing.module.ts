import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from "./home/home.component";
import { Authgard } from "../app/periodics/authGard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'reset',
    component: ResetPasswordComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [Authgard],
    children: [
      { path: '',  component: LoginComponent },
      { path: 'log', component: LoginComponent },
      { path: 'reg', component: RegisterComponent }
    ]
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/index',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Authgard]
})
export class AppRoutingModule { }
