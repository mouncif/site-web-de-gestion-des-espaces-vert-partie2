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
    PlantationComponent
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
  entryComponents: [ParametreComponent, ProfileComponent],

  providers: [
    PhytosanitaireService,
    PlantationService,
    UserService,
    ReclamationService,
    StationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
