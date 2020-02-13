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
import { StatistiquesComponent } from "./statistiques/statistiques.component";
import { ListPlantationComponent } from "./list-plantation/list-plantation.component";
import { UpdatePlantationComponent } from "./update-plantation/update-plantation.component";
import { ListPhytosanitaireComponent } from "./list-phytosanitaire/list-phytosanitaire.component";
import { UpdatePhytosanitaireComponent } from "./update-phytosanitaire/update-phytosanitaire.component";
import { ListArbresComponent } from './list-arbres/list-arbres.component';
import { ListComponent } from './list-arbres/list/list.component';
import { DetailArbreComponent } from './list-arbres/list/detail-arbre/detail-arbre.component';
import { ModifierArbreComponent } from './list-arbres/list/modifier-arbre/modifier-arbre.component';
import { NouveauArbreComponent } from './nouveau-arbre/nouveau-arbre.component';

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
      { path: "", component: StatistiquesComponent },
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
        path: "allPlantation",
        component: ListPlantationComponent
      },
      {
        path: "updatePlantation",
        component: UpdatePlantationComponent
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
      },
      {
        path: "allPhytosanitaire",
        component: ListPhytosanitaireComponent
      },
      {
        path: "updatePhytosanitaire",
        component: UpdatePhytosanitaireComponent
      },
      {
        path: 'listAbres', component: ListArbresComponent,
        children: [
            {
              path: '', component: ListComponent
            },
            {
              path: 'detailsArbre/:id', component: DetailArbreComponent
            },
            {
              path: 'modifierArbre/:id', component: ModifierArbreComponent
            }
          ]
        },
        {
          path: 'nouveauArbre', component: NouveauArbreComponent
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
