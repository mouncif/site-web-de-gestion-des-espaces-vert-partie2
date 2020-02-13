import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

import { MaterialModule } from "./material/material.module";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { UserService } from "../app/services/user.service";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBar, MatSnackBarModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ProfileComponent } from "./profile/profile.component";
import { ParametreComponent } from "./parametre/parametre.component";
import { ReclamationComponent } from "./reclamation/reclamation.component";
import { AddReclamationComponent } from "./reclamation/add-reclamataion/add-reclamataion.component";
import { ListReclamataionComponent } from "./reclamation/list-reclamataion/list-reclamataion.component";
import { UpdateReclamationComponent } from "./reclamation/update-reclamation/update-reclamation.component";
import { ReclamationService } from "./reclamation/services/reclamation.service";
import { ListStationComponent } from "./station/list-station/list-station.component";
import { AddStationComponent } from "./station/add-station/add-station.component";
import { UpdateStationComponent } from "./station/update-station/update-station.component";
import { StationService } from "./station/services/station.service";
import { StatistiquesComponent } from "./statistiques/statistiques.component";
import { PlantationComponent } from "./plantation/plantation.component";
import { PhytosanitaireComponent } from "./Phytosanitaire/phytosanitaire/phytosanitaire.component";
import { PhytosanitaireService } from "./services/phytosanitaire.service";
import { PlantationService } from "./services/plantation.service";
import { AddExpertiseComponent } from "./add-expertise/add-expertise.component";
import { ExpertiseService } from "./services/expertise.service";
import { ListExpertiseComponent } from "./list-expertise/list-expertise.component";
import { UpdateExpertiseComponent } from "./update-expertise/update-expertise.component";
import { UpdatePlantationComponent } from "./update-plantation/update-plantation.component";
import { ListPlantationComponent } from "./list-plantation/list-plantation.component";
import { ListPhytosanitaireComponent } from "./list-phytosanitaire/list-phytosanitaire.component";
import { UpdatePhytosanitaireComponent } from "./update-phytosanitaire/update-phytosanitaire.component";
import { JardinComponent } from './jardin/jardin.component';
import { ListArbresComponent } from './list-arbres/list-arbres.component';
import { ArbreComponent } from './list-arbres/list/arbre/arbre.component';
import { DetailArbreComponent } from './list-arbres/list/detail-arbre/detail-arbre.component';
import { ModifierArbreComponent, DeleteDialogComponent, SaveDialogComponent } from './list-arbres/list/modifier-arbre/modifier-arbre.component';
import { NouveauArbreComponent } from './nouveau-arbre/nouveau-arbre.component';
import { ListComponent } from './list-arbres/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    HomeComponent,
    NavbarComponent,
    NavigationComponent,
    ProfileComponent,
    ParametreComponent,
    StatistiquesComponent,
    ReclamationComponent,
    AddReclamationComponent,
    ListReclamataionComponent,
    UpdateReclamationComponent,
    ListStationComponent,
    AddStationComponent,
    UpdateStationComponent,
    PhytosanitaireComponent,
    PlantationComponent,
    AddExpertiseComponent,
    ListExpertiseComponent,
    UpdateExpertiseComponent,
    ListPlantationComponent,
    UpdatePlantationComponent,
    ListPhytosanitaireComponent,
    UpdatePhytosanitaireComponent,
    JardinComponent,
    ListArbresComponent,
    ArbreComponent,
    DetailArbreComponent,
    ModifierArbreComponent,
    SaveDialogComponent,
    DeleteDialogComponent,
    NouveauArbreComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatSliderModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  entryComponents: [
    ParametreComponent,
    ProfileComponent,
    SaveDialogComponent,
    DeleteDialogComponent
  ],
  providers: [
    PhytosanitaireService,
    PlantationService,
    UserService,
    ReclamationService,
    StationService,
    ExpertiseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
