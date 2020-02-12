import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { HomeComponent } from "./home/home.component";
import { Authgard } from "../app/periodics/authGard";
<<<<<<< HEAD
import { StatistiquesComponent } from './statistiques/statistiques.component';
=======
import { ListReclamataionComponent } from "./reclamation/list-reclamataion/list-reclamataion.component";
import { AddReclamationComponent } from "./reclamation/add-reclamataion/add-reclamataion.component";
import { UpdateReclamationComponent } from "./reclamation/update-reclamation/update-reclamation.component";
>>>>>>> e98809e84b30449840b458956189af7537912c51

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "reset",
    component: ResetPasswordComponent
  },
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [Authgard],
    children: [
<<<<<<< HEAD
      { path: '',  component: StatistiquesComponent },
      { path: 'log', component: LoginComponent },
      { path: 'reg', component: RegisterComponent }
=======
      { path: "", component: LoginComponent },
      {
        path: "allReclamation",
        component: ListReclamataionComponent
      },
      {
        path: "addReclamation",
        component: AddReclamationComponent
      },
      {
        path: "updateReclamation",
        component: UpdateReclamationComponent
      }
>>>>>>> e98809e84b30449840b458956189af7537912c51
    ]
  },
  {
    path: "",
    redirectTo: "/index",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/index",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Authgard]
})
export class AppRoutingModule {}
