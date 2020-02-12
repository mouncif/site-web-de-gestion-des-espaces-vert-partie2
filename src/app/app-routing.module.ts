import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { HomeComponent } from "./home/home.component";
import { Authgard } from "../app/periodics/authGard";
import { ListReclamataionComponent } from "./reclamation/list-reclamataion/list-reclamataion.component";
import { AddReclamationComponent } from "./reclamation/add-reclamataion/add-reclamataion.component";
import { UpdateReclamationComponent } from "./reclamation/update-reclamation/update-reclamation.component";
import { AddStationComponent } from "./station/add-station/add-station.component";
import { UpdateStationComponent } from "./station/update-station/update-station.component";
import { ListStationComponent } from "./station/list-station/list-station.component";
import { PlantationComponent } from "./plantation/plantation.component";
import { PhytosanitaireComponent } from "./Phytosanitaire/phytosanitaire/phytosanitaire.component";
import { AddExpertiseComponent } from "./add-expertise/add-expertise.component";
import { ListExpertiseComponent } from "./list-expertise/list-expertise.component";
import { UpdateExpertiseComponent } from "./update-expertise/update-expertise.component";

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
      },
      {
        path: "allStation",
        component: ListStationComponent
      },
      {
        path: "addStation",
        component: AddStationComponent
      },
      {
        path: "updateStation",
        component: UpdateStationComponent
      },
      {
        path: "plantation",
        component: PlantationComponent
      },
      {
        path: "phytosanitaire",
        component: PhytosanitaireComponent
      },
      {
        path: "addExpertise",
        component: AddExpertiseComponent
      },
      {
        path: "allExpertise",
        component: ListExpertiseComponent
      },
      {
        path: "updateExpertise",
        component: UpdateExpertiseComponent
      }
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
